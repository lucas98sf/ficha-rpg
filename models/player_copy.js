import mongoose, { Schema } from 'mongoose';

const PlayerSchema = new Schema({
    Imagem: { type: String },
    Cor: { type: String },
    Nome: { type: String, required: true, trim: true, unique: true },
    Raça: {
        Descrição: {type: String, trim: true, required: true, default: ''},
        Nome: { type: String, required: true, trim: true }
    },
    Perícias: {
        Físico: {
            Arremessar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Briga: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Escalar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Esquivar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Furtividade: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Nadar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Saltar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        },
        Ciências: {
            Arqueologia: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Astronomia: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Biologia: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Química: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Farmácia: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            'Analisar Espécie': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Medicina: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        },
        Geral: {
            Artes: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Cultura: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Política: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Finanças: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            História: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Línguas: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        },
        Tecnologia: {
            'Tecnologia Cultural': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Craft: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Navegação: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            'Reparação Elétrica': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            'Reparação Mecânica': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            LockPick: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        },
        Sociais: {
            Barganha: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Intimidar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Lábia: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Persuasão: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Psicologia: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Charme: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        },
        Armas: {
            'Corpo a Corpo': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Pistolas: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            'Rifles de Assalto': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Snipers: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Shotguns: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        },
        Percepção: {
            Intuição: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Escutar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
            Encontrar: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        }
    },
    Atributos: {
        FOR: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        CON: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        DES: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        INT: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        TAM: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        POW: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        APA: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
        SOR: { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 1, required: true, min: 1, max: 19 }
            },
    },
    Resistências: {
        Perfurante: {
            Descrição: {type: String, trim: true, required: true, default: ''},
            Nível:{ type: String, default: "0", required: true }
        },
        Corte: {
            Descrição: {type: String, trim: true, required: true, default: ''},
            Nível:{ type: String, default: "0", required: true }
        },
        Brusco: {
            Descrição: {type: String, trim: true, required: true, default: ''},
            Nível:{ type: String, default: "0", required: true }
        },
        Elemental: {
            Descrição: {type: String, trim: true, required: true, default: ''},
            Nível:{ type: String, default: "0", required: true }
        },
        Veneno: {
            Descrição: {type: String, trim: true, required: true, default: ''},
            Nível:{ type: String, default: "0", required: true }
        },
        Morte: {
            Descrição: {type: String, trim: true, required: true, default: ''},
            Nível:{ type: String, default: "0", required: true }
        },
        Magia: {
            Descrição: {type: String, trim: true, required: true, default: ''},
            Nível:{ type: String, default: "0", required: true }
        },
    },
    Status: {
        PV:{
            'VidaAtual': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 0, required: true, min: 0, max: 999 }
            },
            'VidaMáxima': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 0, required: true, min: 0, max: 999 }
            },
        },
        PS:{
            'SanidadeAtual': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 0, required: true, min: 0, max: 999 }
            },
            'SanidadeMáxima': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 0, required: true, min: 0, max: 999 }
            },
        },
        PM:{
            'MagiaAtual': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 0, required: true, min: 0, max: 999 }
            },
            'MagiaMáxima': { 
                Descrição: {type: String, trim: true, required: true, default: ''},
                Nível: { type: Number, default: 0, required: true, min: 0, max: 999 }
            },
        },
    },
    Anotações: {
        Descrição: {type: String, trim: true, required: true, default: ''},
        Nível: { type: String, default: ' ', required: true }
    },
    Lins: {
        Descrição: {type: String, trim: true, required: true, default: ''},
        Quantidade: { type: Number, default: 0, required: true }},
    Exp: {
        Descrição: {type: String, trim: true, required: true, default: ''},
        Quantidade: { type: Number, default: 0, required: true }
    },
    Conexões: {
        Descrição: {type: String, trim: true, required: true, default: ''},
        Nome: { type: [String], default: [], required: true }
    },
    Itens: {
        Descrição: {type: String, trim: true, required: true, default: ''},
        type: [
            {
                ID: { type: Number, required: true },
                Quantidade: { type: Number, default: 1, min: 1, required: true }
            },
        ],
        default: []
    },
    Habilidades: {
        Descrição: {type: String, trim: true, required: true, default: ''},
        type: [
            {
                ID: { type: Number, required: true },
            },
        ],
        default: []
    }
});

const Player = mongoose.models.Player || mongoose.model('Player', PlayerSchema, 'players');

export default Player;
