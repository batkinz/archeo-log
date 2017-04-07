/* globals __, Regesz */
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Objects = new Meteor.Collection('objektum');

const ObjectSchema = new SimpleSchema({
    projekt_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    objektum_szam: {
        type: Number,
        custom() {
            const objectsWithSameNumberIter = Objects.find({
                _id: { $not: this.field('_id').value },
                projekt_id: this.field('projekt_id').value,
                objektum_szam: this.value,
            });
            return (objectsWithSameNumberIter.count() === 0) ? true : 'notAllowed';
        },
    },
    telepules: {
        type: String,
    },
    objektum_jellege: {
        type: String,
        optional: true,
        autoform: {
            options() {
                return Regesz.static_string_select("objektum_jellege");
            },
        },
    },
    objektum_pozitiv: {
        type: [String],
        optional: true,
        custom() {
            if (this.field('objektum_jellege').value !==
                'static_strings.objektum_jellege.objektum_jellege_0') {
                this.value = '';
            }
            return true;
        },
    },
    objektum_pozitiv_egyeb: {
        type: [String],
        optional: true,
        custom() {
            return Regesz.validate_egyeb(this, 'objektum_pozitiv', 'objektum_pozitiv');
        },
    },
    objektum_negativ: {
        type: [String],
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
                return Regesz.static_string_select('objektum_negativ');
            },
        },
    },
    objektum_negativ_egyeb: {
        type: [String],
        optional: true,
        custom() {
            return Regesz.validate_egyeb(this, 'objektum_negativ', 'objektum_negativ');
        },
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
                return Regesz.static_string_select('kormeghatarozas_alapja');
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

            return '';
        },
        autoform: {
            options() {
                const objectId = Router.current().params.objektum_id;
                const leletek = Regesz.lelet_select(objectId);
                return leletek;
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
            return '';
        },
        autoform: {
            options() {
                const projectId = Router.current().params.projectId;
                const objektumok = Regesz.objektum_select(projectId);
                return objektumok;
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
});

Objects.attachSchema(ObjectSchema);

export default Objects;
