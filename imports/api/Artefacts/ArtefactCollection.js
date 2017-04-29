import SimpleSchema from 'simpl-schema';
import StaticFormOptionProvider from '../StaticFormOptions/StaticFormOptionProvider.js';
import { getOmittedFields } from '/imports/api/CollectionHelpers/CollectionHelpers.js';

const Artefacts = new Meteor.Collection('leletek');

const ArtefactSchema = new SimpleSchema({
    objektum_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    lelet_szam: {
        type: Number,
        index: false,
        custom() {
            const collidingArtifactNumbers = Artefacts.find({
                _id: { $ne: this.docId },
                objektum_id: this.siblingField('objektum_id').value,
                lelet_szam: this.value,
            });
            if (collidingArtifactNumbers.count() > 0) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    megtalalo_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    raktari_lada_szama: {
        type: Number,
        optional: true,
    },
    anyag: {
        type: Array,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('anyag');
            },
        },
    },
    'anyag.$': {
        type: String,
    },
    anyag_egyeb: {
        type: Array,
        optional: true,
        custom() {
            // return Regesz.validate_egyeb(this, 'anyag', 'anyag');
        },
    },
    'anyag_egyeb.$': {
        type: String,
    },
    leletcsoport: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('leletcsoport_alt');
            },
        },
    },
    lelet_megnevezese: {
        type: Array,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('lelet_megnevezese');
            },
        },
    },
    'lelet_megnevezese.$': {
        type: String,
    },
    lelet_megnevezese_egyeb: {
        type: Array,
        optional: true,
        custom() {
            // return Regesz.validate_egyeb(this, 'lelet_megnevezese', 'lelet_megnevezese');
        },
    },
    'lelet_megnevezese_egyeb.$': {
        type: String,
    },
    darabszam: {
        type: Number,
        defaultValue: 1,
        optional: true,
    },
    lelet_elhelyezkedese: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('lelet_elhelyezkedese');
            },
        },
    },
    legmagasabb_pont: {
        type: Number,
        optional: true,
    },
    legalacsonyabb_pont: {
        type: Number,
        optional: true,
    },
    tisztitas_datuma: {
        type: Date,
        optional: true,
    },
    tisztitas_eszkoze: {
        type: Array,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('tisztitas_eszkoze');
            },
        },
    },
    'tisztitas_eszkoze.$': {
        type: String,
    },
    szaritas_modja: {
        type: Array,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('szaritas_modja');
            },
        },
    },
    'szaritas_modja.$': {
        type: String,
    },
    anyagcsoport: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('anyagcsoport');
            },
        },
    },
    koztes_tarolas_modja: {
        type: Array,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('koztes_tarolas_modja');
            },
        },
    },
    'koztes_tarolas_modja.$': {
        type: String,
    },
    megjegyzes: {
        type: String,
        optional: true,
        autoform: {
            rows: 5,
        },
    },
    adatrogzito_szemely_id: {
        type: String,
        optional: true,
        regEx: SimpleSchema.RegEx.Id,
    },
});

Artefacts.attachSchema(ArtefactSchema);

Artefacts.allow({
    insert() {
        return Meteor.user();
    },
    remove() {
        return Meteor.user();
    },
    update() {
        return Meteor.user();
    },
});

const omitFields = getOmittedFields(ArtefactSchema);

export {
    Artefacts as default,
    ArtefactSchema,
    omitFields as OmitFieldsArtefactForm,
};
