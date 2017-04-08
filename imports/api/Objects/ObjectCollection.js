import SimpleSchema from 'simpl-schema';
import Artefacts from  '../Artefacts/ArtefactCollection.js';
import StaticFormOptionProvider from '../StaticFormOptions/StaticFormOptionProvider.js';

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
            return (objectsWithSameNumberIter.count() === 0) || 'notAllowed';
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
    },
    'objektum_pozitiv.$': {
        type: String,
    },
    objektum_pozitiv_egyeb: {
        type: Array,
        optional: true,
        custom() {
            // return Regesz.validate_egyeb(this, 'objektum_pozitiv', 'objektum_pozitiv');
        },
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
        custom() {
            // return Regesz.validate_egyeb(this, 'objektum_negativ', 'objektum_negativ');
        },
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

            return '';
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
            return '';
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
});

Objects.attachSchema(ObjectSchema);

export default Objects;
