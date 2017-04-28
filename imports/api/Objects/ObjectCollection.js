import SimpleSchema from 'simpl-schema';
import StaticFormOptionProvider from '../StaticFormOptions/StaticFormOptionProvider.js';
import { getOmittedFields } from '/imports/api/CollectionHelpers/CollectionHelpers.js';

import GraveSchema from './GraveSchema.js';

const Objects = new Meteor.Collection('objektum');

const ObjectSchema = new SimpleSchema({
    projekt_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        omitInForm: true,
        autoform: {
            type: 'hidden',
        },
    },
    objektum_szam: {
        type: Number,
        custom() {
            const predicate = {
                _id: { $not: { $eq: this.docId } },
                projekt_id: this.siblingField('projekt_id').value,
                objektum_szam: this.value,
            };
            const objectsWithSameNumberIter = Objects.find(predicate);
            if (objectsWithSameNumberIter.count() !== 0) {
                return 'notAllowed';
            }

            return undefined;
        },
    },
    telepules: {
        type: String,
        optional: true,
    },
    objektum_jellege: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('objektum_jellege');
            },
        },
    },
    objektum_pozitiv: {
        type: Array,
        optional: true,
        custom() {
            if (this.field('objektum_jellege').value !==
                'static_strings.objektum_jellege.objektum_jellege_0') {
                this.value = '';
            }
            return true;
        },
        autoform: {
            options() {
                return StaticFormOptionProvider.get('objektum_pozitiv');
            },
        },
    },
    'objektum_pozitiv.$': {
        type: String,
    },
    objektum_pozitiv_egyeb: {
        type: Array,
        optional: true,
        // custom() {
        //     // return Regesz.validate_egyeb(this, 'objektum_pozitiv', 'objektum_pozitiv');
        // },
    },
    'objektum_pozitiv_egyeb.$': {
        type: String,
    },
    objektum_negativ: {
        type: Array,
        optional: true,
        custom() {
            if (this.field('objektum_jellege').value !==
                'static_strings.objektum_jellege.objektum_jellege_1') {
                this.value = '';
            }
            return true;
        },
        autoform: {
            options() {
                return StaticFormOptionProvider.get('objektum_negativ');
            },
        },
    },
    'objektum_negativ.$': {
        type: String,
    },
    objektum_negativ_egyeb: {
        type: Array,
        optional: true,
        // custom() {
        //     // return Regesz.validate_egyeb(this, 'objektum_negativ', 'objektum_negativ');
        // },
    },
    'objektum_negativ_egyeb.$': {
        type: String,
    },
    elozetes_ertelmezes: {
        type: String,
        optional: true,
    },
    feltarasi_mezo_szama: {
        type: String,
        optional: true,
    },
    kormeghatarozas_alapja: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('kormeghatarozas_alapja');
            },
        },
    },
    kormeghatarozas_alapja_lelet_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        custom() {
            if (this.field('kormeghatarozas_alapja').value ===
                'static_strings.kormeghatarozas_alapja.kormeghatarozas_alapja_0') {
                return 'required';
            }

            return undefined;
        },
        autoform: {
            options() {
                // Artefacts.find({ projekt_id: this.field('projekt_id') });
                //
                // const objectId = Router.current().params.objektum_id;
                // const leletek = Regesz.lelet_select(objectId);
                // return leletek;
            },
        },
    },
    kormeghatarozas_alapja_objektum_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
        custom() {
            if (this.field('kormeghatarozas_alapja').value ===
                'static_strings.kormeghatarozas_alapja.kormeghatarozas_alapja_1') {
                return 'required';
            }

            return undefined;
        },
        autoform: {
            options() {
                // const projectId = Router.current().params.projectId;
                // const objektumok = Regesz.objektum_select(projectId);
                // return objektumok;
            },
        },
    },
    altalanos_megjegyzesek: {
        type: String,
        optional: true,
        autoform: {
            rows: 6,
        },
    },
    teljes_objektumfeltaras_idopontja: {
        type: Date,
        optional: true,
    },
    sir: {
        type: Object,
        optional: true,
    },
    adatrogzito_szemely_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    timestamp: {
        type: Date,
        optional: true,
        omitInForm: true,
    },
});

ObjectSchema.extend(GraveSchema);

Objects.attachSchema(ObjectSchema);

Objects.allow({
    insert(userId, doc) {
        return true;
        // return userId;
    },
    update(userId, doc, fieldNames, modifier) {
        return true;
        // return (userId && doc.userId === userId && _.difference(fieldNames, whitelist).length === 0);
    },
    remove(userId, doc) {
        return true;
        // return userId === doc.adatrogzito_szemely_id;
    },
});

const omitFields = getOmittedFields(ObjectSchema);

export {
    Objects as default,
    ObjectSchema,
    omitFields as OmitFieldsObjectForm,
};
