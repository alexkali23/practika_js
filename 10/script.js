class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this);
      this.expected_sumbol = false;
      this.string = '';
      this.new_string = false;
      this.summ = 0;
    }

    add_sumbol(sumbol) {
        if(this.expected_sumbol){
            this.expected_sumbol = false;
            this.string+=sumbol;
            if(sumbol === '='){
                this.new_string = true;
            }
        }
    }

    add_number(number) {
        this.expected_sumbol = true;
        this.string+=number;
    }

    delete() {
        this.expected_sumbol = false;
        this.string = '';
        this.summ = 0;
    }

    onClick(event) {
        if(this.new_string){
            this.summ+= eval(this.string.substring(0, this.string.length - 1))
            this.string = '';
            this.new_string = false;
        }
        let value = event.target.textContent;
        if(Number.isInteger(+value)){
            this.add_number(value)
        }else if(value == 'delete'){
            this.delete()
        }else{
            this.add_sumbol(value)
        }
        
        document.getElementById('string').innerHTML = this.string;


        let valid_string=this.string;
        if(!Number.isInteger(+valid_string.slice(-1))){
            valid_string = valid_string.substring(0, valid_string.length - 1)
        }
        console.log(valid_string)
        document.getElementById('value').innerHTML = eval(valid_string) + this.summ;

    };
  }

new Menu(document.getElementById('calc'));

  