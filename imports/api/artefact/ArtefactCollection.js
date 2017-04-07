import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Artefacts = new Meteor.Collection('leletek');

const ArtefactSchema = new SimpleSchema({
    lelet_szam: {
        type: Number,
        unique: false,
        index: false,
        custom() {
            if (Meteor.isClient) {
                const objektumId = Router.current().params.objektum_id;
                const leletId = Router.current().params.lelet_id;
                if (leletId && Artefacts.find({ _id: { $not: leletId },
                        objektum_id: objektumId,
                        lelet_szam: this.value }).count() > 0) {
                    return 'notAllowed';
                } else if (!leletId
                    && Artefacts.find({ objektum_id: objektumId, lelet_szam: this.value }).count() > 0) {
                    return 'notAllowed';
                }
            }
            return true;
        },
    },
    megtalalo_id: {
        type: String,
        custom() {
            return Regesz.autocomplete_validate(this.value);
        },
    },
    raktari_lada_szama: {
        type: Number,
        optional: true
    },
    anyag: {
        type: [String],
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select('anyag');
            },
        },
    },
    anyag_egyeb: {
        type: [String],
        optional: true,
        custom() {
            return Regesz.validate_egyeb(this, 'anyag', 'anyag');
        },
    },
    leletcsoport: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select('leletcsoport_alt');
            },
        },
    },
    lelet_megnevezese: {
        type: [String],
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select('lelet_megnevezese');
            },
        },
    },
    lelet_megnevezese_egyeb: {
        type: [String],
        optional: true,
        custom() {
            return Regesz.validate_egyeb(this, 'lelet_megnevezese', 'lelet_megnevezese');
        },
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
                return Regesz.static_string_select('lelet_elhelyezkedese');
            },
        },
    },
    legmagasabb_pont: {
        type: Number,
        decimal: true,
        optional: true,
    },
    legalacsonyabb_pont: {
        type: Number,
        decimal: true,
        optional: true,
    },
    tisztitas_datuma: {
        type: Date,
        optional: true,
    },
    tisztitas_eszkoze: {
        type: [String],
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select('tisztitas_eszkoze');
            },
        },
    },
    szaritas_modja: {
        type: [String],
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select('szaritas_modja');
            },
        },
    },
    anyagcsoport: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select('anyagcsoport');
            },
        },
    },
    koztes_tarolas_modja: {
        type: [String],
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select('koztes_tarolas_modja');
            },
        },
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


