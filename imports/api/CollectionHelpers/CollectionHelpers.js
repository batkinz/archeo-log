/**
 * Created by bence on 2017.04.19..
 */

export const getOmittedFields = function getOmittedFields(schema) {
    const schemaDefinition = schema.getDefinition();
    const omitFields = _.filter(_.keys(schemaDefinition), (property) => {
        return schemaDefinition[property].omitInForm;
    });

    return omitFields;
};

export const getEditableFields = function getEditableFields(schema) {
    const schemaDefinition = schema.getDefinition();
    _.filter(_.keys(schemaDefinition), (property) => {
        return schemaDefinition[property].editable;
    });
};
