$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Service / Linha 01');
        comp_comp1.code = '<div class="row">\
  <div class="col-sm-3">\
    <div class="single_service">\
      <h4>CONSULTORIA JURÍDICA</h4>\
      <p>Focamos no preventivo. Verificar meios efetivos de solução em conjunto (dos) com os clientes, promovendo revisão dos contratos e medidas junto a departamentos visando a otimização e readequação dos métodos e processos dentro da empresa, contribuindo assim para tomada de decisões assertivas.</p>\
    </div>\
  </div>\
  <div class="clear-columns clearfix visible-xs-block"></div>\
  <div class="col-sm-3">\
    <div class="single_service">\
      <h4>ASSESSORIA IMOBILIÁRIA</h4>\
      <p>Administração de Imóveis com o devido controle para melhor segurança jurídica das partes e mediação entre conflitos que possam existir provenientes da relação imobiliária em geral.</p>\
    </div>\
  </div>\
  <div class="clear-columns clearfix visible-xs-block"></div>\
  <div class="col-sm-3">\
    <div class="single_service">\
      <h4>ARBITRAGEM</h4>\
      <p>A arbitragem é um processo mas realizado em câmaras arbitrais que atuam como Justiça Privada, tendo as suas determinações na Lei nº 9307/96 que teve sua revisão na Lei nº 13.129/2015.</p>\
    </div>\
  </div>\
  <div class="clear-columns clearfix visible-xs-block"></div>\
  <div class="col-sm-3">\
    <div class="single_service">\
      <h4>MEDIAÇÃO</h4>\
      <p>A mediação uma medida de solução de conflitos, sendo uma técnica aplicada onde há a participação de uma terceira pessoa imparcial, chamada de mediador, que não possui vínculos nem interesses com as partes envolvidas.</p>\
    </div>\
  </div>\
  <div class="clear-columns clearfix visible-sm-block visible-md-block visible-lg-block visible-xs-block"></div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});