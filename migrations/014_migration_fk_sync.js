'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await dropConstraintIfExist(queryInterface,'departments','fk_departments_bu_id');
        await queryInterface.addConstraint('departments', {
            fields: ['bu_id'],
            type: 'foreign key',
            name: 'fk_departments_bu_id',
            references: {
                table: 'business_units',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });


     

        await queryInterface.addConstraint('employee_details', {
            fields: ['employee_id'],
            type: 'foreign key',
            name: 'fk_employee_details_employee_id',
            references: {
                table: 'employees',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });



        await queryInterface.addConstraint('employee_bu_mapping', {
            fields: ['employee_id'],
            type: 'foreign key',
            name: 'fk_employee_bu_mapping_employee_id',
            references: {
                table: 'employees',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('employee_bu_mapping', {
            fields: ['bu_id'],
            type: 'foreign key',
            name: 'fk_employee_bu_mapping_bu_id',
            references: {
                table: 'business_units',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });



        await queryInterface.addConstraint('departments', {
            fields: ['function_id'],
            type: 'foreign key',
            name: 'fk_departments_function_id',
            references: {
                table: 'functions',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });





        await queryInterface.addConstraint('document_version', {
            fields: ['document_id'],
            type: 'foreign key',
            name: 'fk_document_version_document_id',
            references: {
                table: 'documents',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('document_version', {
            fields: ['function_id'],
            type: 'foreign key',
            name: 'fk_document_version_function_id',
            references: {
                table: 'functions',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('document_version', {
            fields: ['version_id'],
            type: 'foreign key',
            name: 'fk_document_version_version_id',
            references: {
                table: 'document_version',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });




        await queryInterface.addConstraint('documents', {
            fields: ['folder_id'],
            type: 'foreign key',
            name: 'fk_documents_folder_id',
            references: {
                table: 'folders',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('documents', {
            fields: ['function_id'],
            type: 'foreign key',
            name: 'fk_documents_function_id',
            references: {
                table: 'functions',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('documents', {
            fields: ['dept_id'],
            type: 'foreign key',
            name: 'fk_documents_dept_id',
            references: {
                table: 'departments',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });




        await queryInterface.addConstraint('folders', {
            fields: ['function_id'],
            type: 'foreign key',
            name: 'fk_folders_function_id',
            references: {
                table: 'functions',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('folders', {
            fields: ['dept_id'],
            type: 'foreign key',
            name: 'fk_folders_dept_id',
            references: {
                table: 'departments',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });


        await queryInterface.addConstraint('function_employee_mapping', {
            fields: ['employee_id'],
            type: 'foreign key',
            name: 'fk_function_employee_mapping_employee_id',
            references: {
                table: 'employees',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('function_employee_mapping', {
            fields: ['function_id'],
            type: 'foreign key',
            name: 'fk_function_employee_mapping_function_id',
            references: {
                table: 'functions',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('function_employee_mapping', {
            fields: ['dept_id'],
            type: 'foreign key',
            name: 'fk_function_employee_mapping_department_id',
            references: {
                table: 'departments',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });



        await queryInterface.addConstraint('function_dept_mapping', {
            fields: ['function_id'],
            type: 'foreign key',
            name: 'fk_function_dept_mapping_function_id',
            references: {
                table: 'functions',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });
        await queryInterface.addConstraint('function_dept_mapping', {
            fields: ['dept_id'],
            type: 'foreign key',
            name: 'fk_function_dept_mapping_department_id',
            references: {
                table: 'departments',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });


        await queryInterface.addConstraint('functions', {
            fields: ['bu_id'],
            type: 'foreign key',
            name: 'fk_functions_bu_id',
            references: {
                table: 'business_units',
                field: 'id',
            },
            onDelete: 'SET NULL',
        });

        


    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('unknown');
    }
};

async function dropConstraintIfExist(queryInterface,tableName,constraintName) {
    queryInterface.sequelize.query(`
        DO $$
        BEGIN
            IF EXISTS (
            SELECT 1
            FROM information_schema.table_constraints
            WHERE constraint_name = '${constraintName}'
            ) THEN
            ALTER TABLE "${tableName}" DROP CONSTRAINT "${constraintName}";
            END IF;
        END
        $$;
    `);
}