const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    password: "Amit123$",
    host: "127.0.0.1",
    port: 5432,
    database: "jsw",
});

class SQLBuilder {
    constructor() {
        this.reset();
    }

    /**
     * @description this function reset the objects
     */
    reset() {
        this.queryType = '';
        this.tableName = '';
        this.columns = [];
        this.values = [];
        this.sets = [];
        this.wheres = [];
        this.orders = [];
        this.joins = [];
        this.limitVal = '';
        this.sqlqry = '';
    }

    /**
     * @description this function reset the objects
     * @param {string} "Ex: id,name" Rest Paramater
     * @return {object}
     */
    select(...columns) {
        this.reset();
        this.queryType = 'SELECT';
        this.columns = columns.length ? columns : ['*'];
        return this;
    }

    /**
     * @description insert data into tables
     * @param {string} 'table'
     * @param {object} 'dataObj'
     * @return {object}
     */
    insertInto(table, dataObj) {
        this.reset();
        this.queryType = 'INSERT';
        this.tableName = table;
        this.columns = Object.keys(dataObj);
        this.values = Object.values(dataObj);
        return this;
    }

    /**
     * @description update data into tables
     * @param {string} 'table'
     * @return {object}
     */
    update(table) {
        this.reset();
        this.queryType = 'UPDATE';
        this.tableName = table;
        return this;
    }

    /**
     * @description set function for update
     * @param {object} 'dataObj'
     * @return {object}
     */
    set(dataObj) {
        this.sets = Object.entries(dataObj);
        return this;
    }

    /**
     * @description delete function
     * @param {string} 'table'
     * @return {object}
     */
    deleteFrom(table) {
        this.reset();
        this.queryType = 'DELETE';
        this.tableName = table;
        return this;
    }

    /**
     * @description method chaining form function later concatinated
     * @param {string} 'table'
     * @return {object}
     */
    from(table) {
        this.tableName = table;
        return this;
    }

    /**
     * @description Join by type can use in multiple cases
     * @param {string} 'type'
     * @param {string} 'table'
     * @param {string} 'condition'
     * @return {object}
     */
    join(type, table, condition) {
        this.joins.push({ type, table, condition });
        return this;
    }

    /**
     * @description Inner Join
     * @param {string} 'type'
     * @param {string} 'table'
     * @param {string} 'condition'
     * @return {object}
     */
    innerJoin(table, condition) {
        return this.join('INNER JOIN', table, condition);
    }
    
    /**
     * @description Left Join
     * @param {string} 'table'
     * @param {string} 'condition'
     * @return {object}
     */
    leftJoin(table, condition) {
        return this.join('LEFT JOIN', table, condition);
    }
    
    /**
     * @description Right Join
     * @param {string} 'table'
     * @param {string} 'condition'
     * @return {object}
     */
    rightJoin(table, condition) {
        return this.join('RIGHT JOIN', table, condition);
    }
    
    /**
     * @description Full Join
     * @param {string} 'table'
     * @param {string} 'condition'
     * @return {object}
     */
    fullJoin(table, condition) {
        return this.join('FULL JOIN', table, condition);
    }

    /**
     * @description Where caluse
     * @param {string} 'column'
     * @param {string} 'operator' So. <,>,=,=>,<=
     * @param {string} 'value'
     * @return {object}
     */
    where(column, operator, value) {
        this.wheres.push({ column, operator, value });
        return this;
    }

    /**
     * @description Order By
     * @param {string} 'column'
     * @param {string} 'direction'
     * @return {object}
     */
    orderBy(column, direction = 'ASC') {
        this.orders.push({ column, direction });
        return this;
    }

    /**
     * @description Limit caluse
     * @param {string} 'count'
     * @return {object}
     */
    limit(count) {
        this.limitVal = count;
        return this;
    }

    /**
     * @description Generate SQL from method chain and print
     * @return {object}
     */
    toSQL() {
        let sql = '';
        if (this.queryType === 'SELECT') {
            sql += `SELECT ${this.columns.join(', ')} FROM ${this.tableName}`;
        }
        if (this.queryType === 'INSERT') {
            const columnsStr = this.columns.join(', ');
            const valuesStr = this.values.map(v => `'${v}'`).join(', ');
            sql += `INSERT INTO ${this.tableName} (${columnsStr}) VALUES (${valuesStr})`;
        }
        if (this.queryType === 'UPDATE') {
            const setsStr = this.sets.map(([k, v]) => `${k} = '${v}'`).join(', ');
            sql += `UPDATE ${this.tableName} SET ${setsStr}`;
        }
        if (this.queryType === 'DELETE') {
            sql += `DELETE FROM ${this.tableName}`;
        }
        if (this.joins.length && (this.queryType === 'SELECT' || this.queryType === 'UPDATE')) {
            for (const j of this.joins) {
                sql += ` ${j.type} ${j.table} ON ${j.condition}`;
            }
        }
        if (this.wheres.length) {
            const whereStr = this.wheres.map(w => `${w.column} ${w.operator} '${w.value}'`).join(' AND ');
            sql += (this.queryType == 'SELECT') ? ` WHERE ${whereStr} AND deleted_at IS null` : ` WHERE ${whereStr}`;
        }
        if (this.orders.length) {
            const orderStr = this.orders.map(o => `${o.column} ${o.direction}`).join(', ');
            sql += ` ORDER BY ${orderStr}`;
        }
        if (this.limitVal) {
            sql += ` LIMIT ${this.limitVal}`;
        }
        this.sqlqry = sql + ';';
        return this;
    }

    /**
     * @description Execute the sql
     * @return {object}
     */
    execute() {
        return pool.query(this.sqlqry);
    }
}

module.exports = {
    query: (text, params) => pool.query(text, params),
    SQLBuilder: new SQLBuilder(),
};
