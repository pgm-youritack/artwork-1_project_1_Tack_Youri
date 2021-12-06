const art = {
    init(){
        this.cachelements();
        this.generatebuttons();
        
    },
    cachelements(){
        this.$buttons = document.querySelector("#button");
    },
    generatebuttons(){
        const jaar = this.collectjaar();
        this.$buttons.innerHTML='<button type="button" class="button" id="showall">show all</button>'
        for(let  i=0;i<jaar.length;i++){
            this.$buttons.innerHTML+=`
            <button type='button' class="button" id="${jaar[i]}">${jaar[i]}</button>
            `
            
        }
    },
    collectjaar(){
      const jaar = [...new Set(ARTS.map(x=>x.year))];
      return jaar;
    }
};
art.init();
