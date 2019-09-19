new Vue({
    el:"#app",

    data:{
        player_heal:100,
        monster_heal:100,
        game_is_on:false,
        logs: []
    },
    methods:{
        start_game(){
            this.game_is_on = true;
        },
        attack(){
            const point = Math.ceil(Math.random() *10);
            // this.monster_heal = this.monster_heal - point;
            this.monster_attack();
            this.monster_heal -= point;
            this.add_to_log({turn:"p", text: "OYUNCU ATAĞI(" + point + ")"})
        },
        special_attack(){

            const point = Math.ceil(Math.random() *25);
            // this.monster_heal = this.monster_heal - point;
            this.monster_attack();
            this.monster_heal -= point;
            this.add_to_log({turn:"p", text: "ÖZEL HASAR(" + point + ")"})
            
        },
        heal_up(){
            const point = Math.ceil(Math.random() * 20);
            // this.monster_heal = this.monster_heal - point;
            this.monster_attack();
            this.player_heal += point;
            this.add_to_log({turn:"p", text: "İLYARDIM(" + point + ")"})
        },
        give_up(){
            this.player_heal = 0;
            // this.add_to_log({turn:"p", text: "OYUNCU PES ETTİ(" + point + ")"})
        },
        monster_attack (){
             const point = Math.ceil(Math.random()*15);
             // this.monster_heal = this.monster_heal - point;
             this.player_heal -= point;
             this.add_to_log({turn:"m", text: "CANAVAR ATAĞI(" + point + ")"})
        },
        add_to_log(log){
            this.logs.push(log);
        }
    },
    watch:{
    player_heal(value){
        if(value <= 0){
            this.player_heal = 0;
            if(confirm("Oyunu KAYBETTİN. Tekrar denemek ister misin?")){
                this.player_heal = 100;
                this.monster_heal = 100;
                this.logs = [];
        } 
        }   else if(value >= 100){
            this.player_heal = 100;
        }
    },
    monster_heal(value){
        if(value <= 0){
            this.monster_heal = 0;
            if(confirm("Oyunu KAZANDIN. Tekrar denemek ister misin?")){
                this.player_heal = 100;
                this.monster_heal = 100;
                this.logs = [];
            }
        }
    
    }
}

})