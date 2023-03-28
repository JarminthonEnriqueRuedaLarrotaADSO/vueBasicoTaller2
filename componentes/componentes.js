export default {
    data(){
        return{
            sel:'',
            a:'',
            activar_form: '',
            activar_form1:'',
            rol:[{
                a1:'estudiante',
                a2:'profesor'
            }],
            campusG:[
                {
                    campus:{
                        direccion:null,
                        telefono:null,
                        sedes:{
                            sede1:'Bucaramanga',
                            sede2:'Bogota',
                            sede3:'Medellin',
                            sede4:'Mexico'
                        }
                    },
                    profesores:{
                        nombre:null,
                        telefono:null,
                        teams:{
                            horario:null,
                            dia:null,
                            hora:null,
                            salones:{
                                num_salon:null,
                            }

                        },

                    },
                    estudiantes:{
                        nombre:null,
                        telefono:null,
                        teams:{
                            horario:null,
                            dia:null,
                            hora:null,
                            salones:{
                                num_salon:null,
                            }
                        },
                        estrato:null,
                        barrio:null,
                        transporte:null
                    },
                    niveles:{
                        pre_requisito:null,
                        tecnologia_pertenece:null,
                        electiva_obligatoria:null,
                    },
                    roadMap:{
                        num_creditos:null,
                        año:null,
                        num_asignaturas:null
                    }
                }
            ]
        }
    },
    methods:{
       seleccion(){
        if(this.sel == this.campusG[0].campus.sedes.sede1){
            this.activar_form = null
            // this.sel = null
            
            
        }
        if(this.sel == this.campusG[0].campus.sedes.sede2){
            this.activar_form = null
            // this.sel = null
             
        }
        if (this.sel == this.campusG[0].campus.sedes.sede3){
            this.activar_form = null
            // this.sel = null
            
        }
        if (this.sel == this.campusG[0].campus.sedes.sede4){
            this.activar_form = null
            // this.sel = null
           
        
        }
        
       },
       hola(){
           if (this.a == this.rol[0].a1 ) {
               console.log(this.a);
            console.log(this.rol[0].a1);
            this.activar_form1 == null;
        }
        if(this.a == 'profesor'){
            console.log('puta');
            this.activar_form1 = null;

        }
       }
    }
    
}



