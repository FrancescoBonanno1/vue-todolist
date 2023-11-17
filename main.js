const {createApp} = Vue;
    createApp({
    data : function() {
        return{
            listaSpesa : [
            {
                articolo : "Pennarello Nero",
                done : false,
            },

            {
                articolo : "Corda da 5 metri",
                done : false,
            },

            {
                articolo : "Sgabello con gamba mancante",
                done : false,
            },
            {
                articolo : "Honda prelude del 1998",
                done : false,

            }
            ]

        }
    }}).mount(`#app`);