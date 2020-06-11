import Knex from "knex";

export async function seed(knex : Knex) {
    await knex('items').insert([
        {title: "Lâmpadas", image: "lamp.svg"},
        {title: "Pilhas e Baterias", image: "battery.svg"},
        {title: "Papeis e Papelão", image: "paper.svg"},
        {title: "Resíduos Eletrônicos", image: "eletronics.svg"},
        {title: "Resíduos Orgânicos", image: "organics.svg"},
        {title: "Óleo de Cozinha", image: "oil.svg"},
    ]);
}