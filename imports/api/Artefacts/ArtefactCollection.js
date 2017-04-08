import SimpleSchema from 'simpl-schema';
import StaticFormOptionProvider from '../StaticFormOptions/StaticFormOptionProvider.js';

const Artefacts = new Meteor.Collection('leletek');

const ArtefactSchema = new SimpleSchema({
    lelet_szam: {
        type: Number,
        unique: false,
        index: false,
        custom() {
            // if (Meteor.isClient) {
            //     const objektumId = Router.current().params.objektum_id;
            //     const leletId = Router.current().params.lelet_id;
            //     if (leletId && Artefacts.find({ _id: { $not: leletId },
            //             objektum_id: objektumId,
            //             lelet_szam: this.value }).count() > 0) {
            //         return 'notAllowed';
            //     } else if (!leletId
            //         && Artefacts.find({ objektum_id: objektumId, lelet_szam: this.value }).count() > 0) {
            //         return 'notAllowed';
            //     }
            // }
            return true;
        },
    },
    megtalalo_id: {
        type: String,
        custom() {
            // return Regesz.autocomplete_validate(this.value);
        },
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
    },
});

Artefacts.attachSchema(ArtefactSchema);

Artefacts.allow({
    remove() {
        if (Meteor.user()) {
            return true;
        }
        return false;
    },
    update() {
        if (Meteor.user()) {
            return true;
        }
        return false;
    },
});
