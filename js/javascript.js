/**
 * Created by Aleph on 11/19/14.
 */


$(function(){

    var homeC;    var homeC2;
    var sobreC;    var sobreC2;
    var mensagemC;    var mensagemC2;
    var ondeC;    var ondeC2;
    var planoC;    var planoC2;

    var setDivsHeight = function() {
        $('#home').each(function(){
            if ( $(window).height() > $(this).outerHeight() ) {

                $(this).css({
                    height: ($(window).height() - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight()))
                });

            }
        });
    }

    var centralizeThis = function (element) {
        $(element).css({
            marginTop:  $(element).outerHeight()/-2,
            marginLeft:  $(element).outerWidth()/-2
        });
    }

    var setStepCircleSize = function() {
        $('.stepcircle').each(function(){
            if ($(this).width() > $(this).height()){
                $(this).css('height', $(this).width());
            } else {
                $(this).css('width', $(this).height());
            }
        });
    }

    var setContentMarginTop = function() {
        $(window).width() < 768 ? $('#content').css('margin-top', $('nav.visible-xs').outerHeight()) : $('#content').css('margin-top', $('nav.hidden-xs').outerHeight());
    }

    var setNavStyle = function () {
        $('.nav-moving-bg').css({
            height: $('nav.hidden-xs').outerHeight() - 1,
            left: $('.active').offset().left,
            width: $('.active').outerWidth() -1
        });

        $('.m-nav-moving-bg').css({
            height: $('nav.visible-xs').outerHeight() - 1,
            left: $('.active').offset().left,
            width: $('.active').outerWidth() -1
        });
    }

    var executeFunctions = function () {
        setDivsHeight();
        centralizeThis($('#home .row'));
        setStepCircleSize();
        setContentMarginTop();
        setNavStyle();
        $(window).scroll();
    }
    executeFunctions();

    $(window).scroll(function(){
        homeC = $('#home').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        homeC2 = homeC + $('#home').outerHeight();

        sobreC = $('#about').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        sobreC2 = sobreC + $('#about').outerHeight();

        mensagemC = $('#mensagem').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        mensagemC2 = mensagemC + $('#mensagem').outerHeight();

        ondeC = $('#onde').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        ondeC2 = ondeC + $('#onde').outerHeight();

        planoC = $('#plano').offset().top - ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight());
        planoC2 = planoC + $('#plano').outerHeight();

        $('.active').removeClass('active');

        if ( (sobreC >= $(window).scrollTop()) && (sobreC2 < $(window).scrollTop() + $(window).height()) || (sobreC <= $(window).scrollTop()) && (sobreC2 > $(window).scrollTop())){
            $(window).width() < 768 ? $('nav.visible-xs .navsobre').addClass('active') : $('nav.hidden-xs .navsobre').addClass('active');
        } else if ( (mensagemC <= $(window).scrollTop()) && (mensagemC2 > $(window).scrollTop()) ){
            $(window).width() < 768 ? $('nav.visible-xs .navmsg').addClass('active') : $('nav.hidden-xs .navmsg').addClass('active');
        } else if ( (ondeC <= $(window).scrollTop()) && (ondeC2 > $(window).scrollTop()) ){
            $(window).width() < 768 ? $('nav.visible-xs .navonde').addClass('active') : $('nav.hidden-xs .navonde').addClass('active');
        } else if ( (planoC <= $(window).scrollTop()) && (planoC2 > $(window).scrollTop()) ){
            $(window).width() < 768 ? $('nav.visible-xs .navplano').addClass('active') : $('nav.hidden-xs .navplano').addClass('active');
        } else {
            $(window).width() < 768 ? $('nav.visible-xs .navhome').addClass('active') : $('nav.hidden-xs .navhome').addClass('active');
        }

        goToActive();
    });

    $(window).resize(function(){

        executeFunctions();

    });

    $(window).resize();
    
    

});

var states = [
        {
            "name": "Minas Gerais",
            "acronym": "MG",
            "capital": "Belo Horizonte",
            "cities": ["Abadia dos Dourados", "Abaeté", "Abre Campo", "Acaiaca", "Açucena", "Água Boa", "Água Comprida", "Aguanil", "Águas Formosas", "Águas Vermelhas", "Aimorés", "Aiuruoca", "Alagoa", "Albertina", "Além Paraíba", "Alfenas", "Alfredo Vasconcelos", "Almenara", "Alpercata", "Alpinópolis", "Alterosa", "Alto Caparaó", "Alto Jequitibá", "Alto Rio Doce", "Alvarenga", "Alvinópolis", "Alvorada de Minas", "Amparo do Serra", "Andradas", "Andrelândia", "Angelândia", "Antônio Carlos", "Antônio Dias", "Antônio Prado de Minas", "Araçaí", "Aracitaba", "Araçuaí", "Araguari", "Arantina", "Araponga", "Araporã", "Arapuá", "Araújos", "Araxá", "Arceburgo", "Arcos", "Areado", "Argirita", "Aricanduva", "Arinos", "Astolfo Dutra", "Ataléia", "Augusto de Lima", "Baependi", "Baldim", "Bambuí", "Bandeira", "Bandeira do Sul", "Barão de Cocais", "Barão de Monte Alto", "Barbacena", "Barra Longa", "Barroso", "Bela Vista de Minas", "Belmiro Braga", "Belo Horizonte", "Belo Oriente", "Belo Vale", "Berilo", "Berizal", "Bertópolis", "Betim", "Bias Fortes", "Bicas", "Biquinhas", "Boa Esperança", "Bocaina de Minas", "Bocaiúva", "Bom Despacho", "Bom Jardim de Minas", "Bom Jesus da Penha", "Bom Jesus do Amparo", "Bom Jesus do Galho", "Bom Repouso", "Bom Sucesso", "Bonfim", "Bonfinópolis de Minas", "Bonito de Minas", "Borda da Mata", "Botelhos", "Botumirim", "Brás Pires", "Brasilândia de Minas", "Brasília de Minas", "Brasópolis", "Braúnas", "Brumadinho", "Bueno Brandão", "Buenópolis", "Bugre", "Buritis", "Buritizeiro", "Cabeceira Grande", "Cabo Verde", "Cachoeira da Prata", "Cachoeira de Minas", "Cachoeira de Pajeú", "Cachoeira Dourada", "Caetanópolis", "Caeté", "Caiana", "Cajuri", "Caldas", "Camacho", "Camanducaia", "Cambuí", "Cambuquira", "Campanário", "Campanha", "Campestre", "Campina Verde", "Campo Azul", "Campo Belo", "Campo do Meio", "Campo Florido", "Campos Altos", "Campos Gerais", "Cana Verde", "Canaã", "Canápolis", "Candeias", "Cantagalo", "Caparaó", "Capela Nova", "Capelinha", "Capetinga", "Capim Branco", "Capinópolis", "Capitão Andrade", "Capitão Enéas", "Capitólio", "Caputira", "Caraí", "Caranaíba", "Carandaí", "Carangola", "Caratinga", "Carbonita", "Careaçu", "Carlos Chagas", "Carmésia", "Carmo da Cachoeira", "Carmo da Mata", "Carmo de Minas", "Carmo do Cajuru", "Carmo do Paranaíba", "Carmo do Rio Claro", "Carmópolis de Minas", "Carneirinho", "Carrancas", "Carvalhópolis", "Carvalhos", "Casa Grande", "Cascalho Rico", "Cássia", "Cataguases", "Catas Altas", "Catas Altas da Noruega", "Catuji", "Catuti", "Caxambu", "Cedro do Abaeté", "Central de Minas", "Centralina", "Chácara", "Chalé", "Chapada do Norte", "Chapada Gaúcha", "Chiador", "Cipotânea", "Claraval", "Claro dos Poções", "Cláudio", "Coimbra", "Coluna", "Comendador Gomes", "Comercinho", "Conceição da Aparecida", "Conceição da Barra de Minas", "Conceição das Alagoas", "Conceição das Pedras", "Conceição de Ipanema", "Conceição do Mato Dentro", "Conceição do Pará", "Conceição do Rio Verde", "Conceição dos Ouros", "Cônego Marinho", "Confins", "Congonhal", "Congonhas", "Congonhas do Norte", "Conquista", "Conselheiro Lafaiete", "Conselheiro Pena", "Consolação", "Contagem", "Coqueiral", "Coração de Jesus", "Cordisburgo", "Cordislândia", "Corinto", "Coroaci", "Coromandel", "Coronel Fabriciano", "Coronel Murta", "Coronel Pacheco", "Coronel Xavier Chaves", "Córrego Danta", "Córrego do Bom Jesus", "Córrego Fundo", "Córrego Novo", "Couto de Magalhães de Minas", "Crisólita", "Cristais", "Cristália", "Cristiano Otoni", "Cristina", "Crucilândia", "Cruzeiro da Fortaleza", "Cruzília", "Cuparaque", "Curral de Dentro", "Curvelo", "Datas", "Delfim Moreira", "Delfinópolis", "Delta", "Descoberto", "Desterro de Entre Rios", "Desterro do Melo", "Diamantina", "Diogo de Vasconcelos", "Dionísio", "Divinésia", "Divino", "Divino das Laranjeiras", "Divinolândia de Minas", "Divinópolis", "Divisa Alegre", "Divisa Nova", "Divisópolis", "Dom Bosco", "Dom Cavati", "Dom Joaquim", "Dom Silvério", "Dom Viçoso", "Dona Euzébia", "Dores de Campos", "Dores de Guanhães", "Dores do Indaiá", "Dores do Turvo", "Doresópolis", "Douradoquara", "Durandé", "Elói Mendes", "Engenheiro Caldas", "Engenheiro Navarro", "Entre Folhas", "Entre Rios de Minas", "Ervália", "Esmeraldas", "Espera Feliz", "Espinosa", "Espírito Santo do Dourado", "Estiva", "Estrela Dalva", "Estrela do Indaiá", "Estrela do Sul", "Eugenópolis", "Ewbank da Câmara", "Extrema", "Fama", "Faria Lemos", "Felício dos Santos", "Felisburgo", "Felixlândia", "Fernandes Tourinho", "Ferros", "Fervedouro", "Florestal", "Formiga", "Formoso", "Fortaleza de Minas", "Fortuna de Minas", "Francisco Badaró", "Francisco Dumont", "Francisco Sá", "Franciscópolis", "Frei Gaspar", "Frei Inocêncio", "Frei Lagonegro", "Fronteira", "Fronteira dos Vales", "Fruta de Leite", "Frutal", "Funilândia", "Galiléia", "Gameleiras", "Glaucilândia", "Goiabeira", "Goianá", "Gonçalves", "Gonzaga", "Gouveia", "Governador Valadares", "Grão Mogol", "Grupiara", "Guanhães", "Guapé", "Guaraciaba", "Guaraciama", "Guaranésia", "Guarani", "Guarará", "Guarda-Mor", "Guaxupé", "Guidoval", "Guimarânia", "Guiricema", "Gurinhatã", "Heliodora", "Iapu", "Ibertioga", "Ibiá", "Ibiaí", "Ibiracatu", "Ibiraci", "Ibirité", "Ibitiúra de Minas", "Ibituruna", "Icaraí de Minas", "Igarapé", "Igaratinga", "Iguatama", "Ijaci", "Ilicínea", "Imbé de Minas", "Inconfidentes", "Indaiabira", "Indianópolis", "Ingaí", "Inhapim", "Inhaúma", "Inimutaba", "Ipaba", "Ipanema", "Ipatinga", "Ipiaçu", "Ipuiúna", "Iraí de Minas", "Itabira", "Itabirinha de Mantena", "Itabirito", "Itacambira", "Itacarambi", "Itaguara", "Itaipé", "Itajubá", "Itamarandiba", "Itamarati de Minas", "Itambacuri", "Itambé do Mato Dentro", "Itamogi", "Itamonte", "Itanhandu", "Itanhomi", "Itaobim", "Itapagipe", "Itapecerica", "Itapeva", "Itatiaiuçu", "Itaú de Minas", "Itaúna", "Itaverava", "Itinga", "Itueta", "Ituiutaba", "Itumirim", "Iturama", "Itutinga", "Jaboticatubas", "Jacinto", "Jacuí", "Jacutinga", "Jaguaraçu", "Jaíba", "Jampruca", "Janaúba", "Januária", "Japaraíba", "Japonvar", "Jeceaba", "Jenipapo de Minas", "Jequeri", "Jequitaí", "Jequitibá", "Jequitinhonha", "Jesuânia", "Joaíma", "Joanésia", "João Monlevade", "João Pinheiro", "Joaquim Felício", "Jordânia", "José Gonçalves de Minas", "José Raydan", "Josenópolis", "Juatuba", "Juiz de Fora", "Juramento", "Juruaia", "Juvenília", "Ladainha", "Lagamar", "Lagoa da Prata", "Lagoa dos Patos", "Lagoa Dourada", "Lagoa Formosa", "Lagoa Grande", "Lagoa Santa", "Lajinha", "Lambari", "Lamim", "Laranjal", "Lassance", "Lavras", "Leandro Ferreira", "Leme do Prado", "Leopoldina", "Liberdade", "Lima Duarte", "Limeira do Oeste", "Lontra", "Luisburgo", "Luislândia", "Luminárias", "Luz", "Machacalis", "Machado", "Madre de Deus de Minas", "Malacacheta", "Mamonas", "Manga", "Manhuaçu", "Manhumirim", "Mantena", "Mar de Espanha", "Maravilhas", "Maria da Fé", "Mariana", "Marilac", "Mário Campos", "Maripá de Minas", "Marliéria", "Marmelópolis", "Martinho Campos", "Martins Soares", "Mata Verde", "Materlândia", "Mateus Leme", "Mathias Lobato", "Matias Barbosa", "Matias Cardoso", "Matipó", "Mato Verde", "Matozinhos", "Matutina", "Medeiros", "Medina", "Mendes Pimentel", "Mercês", "Mesquita", "Minas Novas", "Minduri", "Mirabela", "Miradouro", "Miraí", "Miravânia", "Moeda", "Moema", "Monjolos", "Monsenhor Paulo", "Montalvânia", "Monte Alegre de Minas", "Monte Azul", "Monte Belo", "Monte Carmelo", "Monte Formoso", "Monte Santo de Minas", "Monte Sião", "Montes Claros", "Montezuma", "Morada Nova de Minas", "Morro da Garça", "Morro do Pilar", "Munhoz", "Muriaé", "Mutum", "Muzambinho", "Nacip Raydan", "Nanuque", "Naque", "Natalândia", "Natércia", "Nazareno", "Nepomuceno", "Ninheira", "Nova Belém", "Nova Era", "Nova Lima", "Nova Módica", "Nova Ponte", "Nova Porteirinha", "Nova Resende", "Nova Serrana", "Nova União", "Novo Cruzeiro", "Novo Oriente de Minas", "Novorizonte", "Olaria", "Olhos-d'Água", "Olímpio Noronha", "Oliveira", "Oliveira Fortes", "Onça de Pitangui", "Oratórios", "Orizânia", "Ouro Branco", "Ouro Fino", "Ouro Preto", "Ouro Verde de Minas", "Padre Carvalho", "Padre Paraíso", "Pai Pedro", "Paineiras", "Pains", "Paiva", "Palma", "Palmópolis", "Papagaios", "Pará de Minas", "Paracatu", "Paraguaçu", "Paraisópolis", "Paraopeba", "Passa Quatro", "Passa Tempo", "Passa-Vinte", "Passabém", "Passos", "Patis", "Patos de Minas", "Patrocínio", "Patrocínio do Muriaé", "Paula Cândido", "Paulistas", "Pavão", "Peçanha", "Pedra Azul", "Pedra Bonita", "Pedra do Anta", "Pedra do Indaiá", "Pedra Dourada", "Pedralva", "Pedras de Maria da Cruz", "Pedrinópolis", "Pedro Leopoldo", "Pedro Teixeira", "Pequeri", "Pequi", "Perdigão", "Perdizes", "Perdões", "Periquito", "Pescador", "Piau", "Piedade de Caratinga", "Piedade de Ponte Nova", "Piedade do Rio Grande", "Piedade dos Gerais", "Pimenta", "Pingo-d'Água", "Pintópolis", "Piracema", "Pirajuba", "Piranga", "Piranguçu", "Piranguinho", "Pirapetinga", "Pirapora", "Piraúba", "Pitangui", "Piumhi", "Planura", "Poço Fundo", "Poços de Caldas", "Pocrane", "Pompéu", "Ponte Nova", "Ponto Chique", "Ponto dos Volantes", "Porteirinha", "Porto Firme", "Poté", "Pouso Alegre", "Pouso Alto", "Prados", "Prata", "Pratápolis", "Pratinha", "Presidente Bernardes", "Presidente Juscelino", "Presidente Kubitschek", "Presidente Olegário", "Prudente de Morais", "Quartel Geral", "Queluzito", "Raposos", "Raul Soares", "Recreio", "Reduto", "Resende Costa", "Resplendor", "Ressaquinha", "Riachinho", "Riacho dos Machados", "Ribeirão das Neves", "Ribeirão Vermelho", "Rio Acima", "Rio Casca", "Rio do Prado", "Rio Doce", "Rio Espera", "Rio Manso", "Rio Novo", "Rio Paranaíba", "Rio Pardo de Minas", "Rio Piracicaba", "Rio Pomba", "Rio Preto", "Rio Vermelho", "Ritápolis", "Rochedo de Minas", "Rodeiro", "Romaria", "Rosário da Limeira", "Rubelita", "Rubim", "Sabará", "Sabinópolis", "Sacramento", "Salinas", "Salto da Divisa", "Santa Bárbara", "Santa Bárbara do Leste", "Santa Bárbara do Monte Verde", "Santa Bárbara do Tugúrio", "Santa Cruz de Minas", "Santa Cruz de Salinas", "Santa Cruz do Escalvado", "Santa Efigênia de Minas", "Santa Fé de Minas", "Santa Helena de Minas", "Santa Juliana", "Santa Luzia", "Santa Margarida", "Santa Maria de Itabira", "Santa Maria do Salto", "Santa Maria do Suaçuí", "Santa Rita de Caldas", "Santa Rita de Ibitipoca", "Santa Rita de Jacutinga", "Santa Rita de Minas", "Santa Rita do Itueto", "Santa Rita do Sapucaí", "Santa Rosa da Serra", "Santa Vitória", "Santana da Vargem", "Santana de Cataguases", "Santana de Pirapama", "Santana do Deserto", "Santana do Garambéu", "Santana do Jacaré", "Santana do Manhuaçu", "Santana do Paraíso", "Santana do Riacho", "Santana dos Montes", "Santo Antônio do Amparo", "Santo Antônio do Aventureiro", "Santo Antônio do Grama", "Santo Antônio do Itambé", "Santo Antônio do Jacinto", "Santo Antônio do Monte", "Santo Antônio do Retiro", "Santo Antônio do Rio Abaixo", "Santo Hipólito", "Santos Dumont", "São Bento Abade", "São Brás do Suaçuí", "São Domingos das Dores", "São Domingos do Prata", "São Félix de Minas", "São Francisco", "São Francisco de Paula", "São Francisco de Sales", "São Francisco do Glória", "São Geraldo", "São Geraldo da Piedade", "São Geraldo do Baixio", "São Gonçalo do Abaeté", "São Gonçalo do Pará", "São Gonçalo do Rio Abaixo", "São Gonçalo do Rio Preto", "São Gonçalo do Sapucaí", "São Gotardo", "São João Batista do Glória", "São João da Lagoa", "São João da Mata", "São João da Ponte", "São João das Missões", "São João del Rei", "São João do Manhuaçu", "São João do Manteninha", "São João do Oriente", "São João do Pacuí", "São João do Paraíso", "São João Evangelista", "São João Nepomuceno", "São Joaquim de Bicas", "São José da Barra", "São José da Lapa", "São José da Safira", "São José da Varginha", "São José do Alegre", "São José do Divino", "São José do Goiabal", "São José do Jacuri", "São José do Mantimento", "São Lourenço", "São Miguel do Anta", "São Pedro da União", "São Pedro do Suaçuí", "São Pedro dos Ferros", "São Romão", "São Roque de Minas", "São Sebastião da Bela Vista", "São Sebastião da Vargem Alegre", "São Sebastião do Anta", "São Sebastião do Maranhão", "São Sebastião do Oeste", "São Sebastião do Paraíso", "São Sebastião do Rio Preto", "São Sebastião do Rio Verde", "São Thomé das Letras", "São Tiago", "São Tomás de Aquino", "São Vicente de Minas", "Sapucaí-Mirim", "Sardoá", "Sarzedo", "Sem-Peixe", "Senador Amaral", "Senador Cortes", "Senador Firmino", "Senador José Bento", "Senador Modestino Gonçalves", "Senhora de Oliveira", "Senhora do Porto", "Senhora dos Remédios", "Sericita", "Seritinga", "Serra Azul de Minas", "Serra da Saudade", "Serra do Salitre", "Serra dos Aimorés", "Serrania", "Serranópolis de Minas", "Serranos", "Serro", "Sete Lagoas", "Setubinha", "Silveirânia", "Silvianópolis", "Simão Pereira", "Simonésia", "Sobrália", "Soledade de Minas", "Tabuleiro", "Taiobeiras", "Taparuba", "Tapira", "Tapiraí", "Taquaraçu de Minas", "Tarumirim", "Teixeiras", "Teófilo Otoni", "Timóteo", "Tiradentes", "Tiros", "Tocantins", "Tocos do Moji", "Toledo", "Tombos", "Três Corações", "Três Marias", "Três Pontas", "Tumiritinga", "Tupaciguara", "Turmalina", "Turvolândia", "Ubá", "Ubaí", "Ubaporanga", "Uberaba", "Uberlândia", "Umburatiba", "Unaí", "União de Minas", "Uruana de Minas", "Urucânia", "Urucuia", "Vargem Alegre", "Vargem Bonita", "Vargem Grande do Rio Pardo", "Varginha", "Varjão de Minas", "Várzea da Palma", "Varzelândia", "Vazante", "Verdelândia", "Veredinha", "Veríssimo", "Vermelho Novo", "Vespasiano", "Viçosa", "Vieiras", "Virgem da Lapa", "Virgínia", "Virginópolis", "Virgolândia", "Visconde do Rio Branco", "Volta Grande", "Wenceslau Braz"]
        },
        {
            "name": "Rio de Janeiro",
            "acronym": "RJ",
            "capital": "Rio de Janeiro",
            "cities": ["Angra dos Reis", "Aperibé", "Araruama", "Areal", "Armação de Búzios", "Arraial do Cabo", "Barra do Piraí", "Barra Mansa", "Belford Roxo", "Bom Jardim", "Bom Jesus do Itabapoana", "Cabo Frio", "Cachoeiras de Macacu", "Cambuci", "Campos dos Goytacazes", "Cantagalo", "Carapebus", "Cardoso Moreira", "Carmo", "Casimiro de Abreu", "Comendador Levy Gasparian", "Conceição de Macabu", "Cordeiro", "Duas Barras", "Duque de Caxias", "Engenheiro Paulo de Frontin", "Guapimirim", "Iguaba Grande", "Itaboraí", "Itaguaí", "Italva", "Itaocara", "Itaperuna", "Itatiaia", "Japeri", "Laje do Muriaé", "Macaé", "Macuco", "Magé", "Mangaratiba", "Maricá", "Mendes", "Mesquita", "Miguel Pereira", "Miracema", "Natividade", "Nilópolis", "Niterói", "Nova Friburgo", "Nova Iguaçu", "Paracambi", "Paraíba do Sul", "Parati", "Paty do Alferes", "Petrópolis", "Pinheiral", "Piraí", "Porciúncula", "Porto Real", "Quatis", "Queimados", "Quissamã", "Resende", "Rio Bonito", "Rio Claro", "Rio das Flores", "Rio das Ostras", "Rio de Janeiro", "Santa Maria Madalena", "Santo Antônio de Pádua", "São Fidélis", "São Francisco de Itabapoana", "São Gonçalo", "São João da Barra", "São João de Meriti", "São José de Ubá", "São José do Vale do Rio Preto", "São Pedro da Aldeia", "São Sebastião do Alto", "Sapucaia", "Saquarema", "Seropédica", "Silva Jardim", "Sumidouro", "Tanguá", "Teresópolis", "Trajano de Morais", "Três Rios", "Valença", "Varre-Sai", "Vassouras", "Volta Redonda"]
        },
        {
            "name": "São Paulo",
            "acronym": "SP",
            "capital": "São Paulo",
            "cities": ["Adamantina", "Adolfo", "Aguaí", "Águas da Prata", "Águas de Lindóia", "Águas de Santa Bárbara", "Águas de São Pedro", "Agudos", "Alambari", "Alfredo Marcondes", "Altair", "Altinópolis", "Alto Alegre", "Alumínio", "Álvares Florence", "Álvares Machado", "Álvaro de Carvalho", "Alvinlândia", "Americana", "Américo Brasiliense", "Américo de Campos", "Amparo", "Analândia", "Andradina", "Angatuba", "Anhembi", "Anhumas", "Aparecida", "Aparecida d'Oeste", "Apiaí", "Araçariguama", "Araçatuba", "Araçoiaba da Serra", "Aramina", "Arandu", "Arapeí", "Araraquara", "Araras", "Arco-Íris", "Arealva", "Areias", "Areiópolis", "Ariranha", "Artur Nogueira", "Arujá", "Aspásia", "Assis", "Atibaia", "Auriflama", "Avaí", "Avanhandava", "Avaré", "Bady Bassitt", "Balbinos", "Bálsamo", "Bananal", "Barão de Antonina", "Barbosa", "Bariri", "Barra Bonita", "Barra do Chapéu", "Barra do Turvo", "Barretos", "Barrinha", "Barueri", "Bastos", "Batatais", "Bauru", "Bebedouro", "Bento de Abreu", "Bernardino de Campos", "Bertioga", "Bilac", "Birigui", "Biritiba-Mirim", "Boa Esperança do Sul", "Bocaina", "Bofete", "Boituva", "Bom Jesus dos Perdões", "Bom Sucesso de Itararé", "Borá", "Boracéia", "Borborema", "Borebi", "Botucatu", "Bragança Paulista", "Braúna", "Brejo Alegre", "Brodowski", "Brotas", "Buri", "Buritama", "Buritizal", "Cabrália Paulista", "Cabreúva", "Caçapava", "Cachoeira Paulista", "Caconde", "Cafelândia", "Caiabu", "Caieiras", "Caiuá", "Cajamar", "Cajati", "Cajobi", "Cajuru", "Campina do Monte Alegre", "Campinas", "Campo Limpo Paulista", "Campos do Jordão", "Campos Novos Paulista", "Cananéia", "Canas", "Cândido Mota", "Cândido Rodrigues", "Canitar", "Capão Bonito", "Capela do Alto", "Capivari", "Caraguatatuba", "Carapicuíba", "Cardoso", "Casa Branca", "Cássia dos Coqueiros", "Castilho", "Catanduva", "Catiguá", "Cedral", "Cerqueira César", "Cerquilho", "Cesário Lange", "Charqueada", "Chavantes", "Clementina", "Colina", "Colômbia", "Conchal", "Conchas", "Cordeirópolis", "Coroados", "Coronel Macedo", "Corumbataí", "Cosmópolis", "Cosmorama", "Cotia", "Cravinhos", "Cristais Paulista", "Cruzália", "Cruzeiro", "Cubatão", "Cunha", "Descalvado", "Diadema", "Dirce Reis", "Divinolândia", "Dobrada", "Dois Córregos", "Dolcinópolis", "Dourado", "Dracena", "Duartina", "Dumont", "Echaporã", "Eldorado", "Elias Fausto", "Elisiário", "Embaúba", "Embu", "Embu-Guaçu", "Emilianópolis", "Engenheiro Coelho", "Espírito Santo do Pinhal", "Espírito Santo do Turvo", "Estiva Gerbi", "Estrela d'Oeste", "Estrela do Norte", "Euclides da Cunha Paulista", "Fartura", "Fernando Prestes", "Fernandópolis", "Fernão", "Ferraz de Vasconcelos", "Flora Rica", "Floreal", "Florínia", "Flórida Paulista", "Franca", "Francisco Morato", "Franco da Rocha", "Gabriel Monteiro", "Gália", "Garça", "Gastão Vidigal", "Gavião Peixoto", "General Salgado", "Getulina", "Glicério", "Guaiçara", "Guaimbê", "Guaíra", "Guapiaçu", "Guapiara", "Guará", "Guaraçaí", "Guaraci", "Guarani d'Oeste", "Guarantã", "Guararapes", "Guararema", "Guaratinguetá", "Guareí", "Guariba", "Guarujá", "Guarulhos", "Guatapará", "Guzolândia", "Herculândia", "Holambra", "Hortolândia", "Iacanga", "Iacri", "Iaras", "Ibaté", "Ibirá", "Ibirarema", "Ibitinga", "Ibiúna", "Icém", "Iepê", "Igaraçu do Tietê", "Igarapava", "Igaratá", "Iguape", "Ilha Comprida", "Ilha Solteira", "Ilhabela", "Indaiatuba", "Indiana", "Indiaporã", "Inúbia Paulista", "Ipauçu", "Iperó", "Ipeúna", "Ipiguá", "Iporanga", "Ipuã", "Iracemápolis", "Irapuã", "Irapuru", "Itaberá", "Itaí", "Itajobi", "Itaju", "Itanhaém", "Itaóca", "Itapecerica da Serra", "Itapetininga", "Itapeva", "Itapevi", "Itapira", "Itapirapuã Paulista", "Itápolis", "Itaporanga", "Itapuí", "Itapura", "Itaquaquecetuba", "Itararé", "Itariri", "Itatiba", "Itatinga", "Itirapina", "Itirapuã", "Itobi", "Itu", "Itupeva", "Ituverava", "Jaborandi", "Jaboticabal", "Jacareí", "Jaci", "Jacupiranga", "Jaguariúna", "Jales", "Jambeiro", "Jandira", "Jardinópolis", "Jarinu", "Jaú", "Jeriquara", "Joanópolis", "João Ramalho", "José Bonifácio", "Júlio Mesquita", "Jumirim", "Jundiaí", "Junqueirópolis", "Juquiá", "Juquitiba", "Lagoinha", "Laranjal Paulista", "Lavínia", "Lavrinhas", "Leme", "Lençóis Paulista", "Limeira", "Lindóia", "Lins", "Lorena", "Lourdes", "Louveira", "Lucélia", "Lucianópolis", "Luís Antônio", "Luiziânia", "Lupércio", "Lutécia", "Macatuba", "Macaubal", "Macedônia", "Magda", "Mairinque", "Mairiporã", "Manduri", "Marabá Paulista", "Maracaí", "Marapoama", "Mariápolis", "Marília", "Marinópolis", "Martinópolis", "Matão", "Mauá", "Mendonça", "Meridiano", "Mesópolis", "Miguelópolis", "Mineiros do Tietê", "Mira Estrela", "Miracatu", "Mirandópolis", "Mirante do Paranapanema", "Mirassol", "Mirassolândia", "Mococa", "Mogi das Cruzes", "Mogi-Guaçu", "Mogi-Mirim", "Mombuca", "Monções", "Mongaguá", "Monte Alegre do Sul", "Monte Alto", "Monte Aprazível", "Monte Azul Paulista", "Monte Castelo", "Monte Mor", "Monteiro Lobato", "Morro Agudo", "Morungaba", "Motuca", "Murutinga do Sul", "Nantes", "Narandiba", "Natividade da Serra", "Nazaré Paulista", "Neves Paulista", "Nhandeara", "Nipoã", "Nova Aliança", "Nova Campina", "Nova Canaã Paulista", "Nova Castilho", "Nova Europa", "Nova Granada", "Nova Guataporanga", "Nova Independência", "Nova Luzitânia", "Nova Odessa", "Novais", "Novo Horizonte", "Nuporanga", "Ocauçu", "Óleo", "Olímpia", "Onda Verde", "Oriente", "Orindiúva", "Orlândia", "Osasco", "Oscar Bressane", "Osvaldo Cruz", "Ourinhos", "Ouro Verde", "Ouroeste", "Pacaembu", "Palestina", "Palmares Paulista", "Palmeira d'Oeste", "Palmital", "Panorama", "Paraguaçu Paulista", "Paraibuna", "Paraíso", "Paranapanema", "Paranapuã", "Parapuã", "Pardinho", "Pariquera-Açu", "Parisi", "Patrocínio Paulista", "Paulicéia", "Paulínia", "Paulistânia", "Paulo de Faria", "Pederneiras", "Pedra Bela", "Pedranópolis", "Pedregulho", "Pedreira", "Pedrinhas Paulista", "Pedro de Toledo", "Penápolis", "Pereira Barreto", "Pereiras", "Peruíbe", "Piacatu", "Piedade", "Pilar do Sul", "Pindamonhangaba", "Pindorama", "Pinhalzinho", "Piquerobi", "Piquete", "Piracaia", "Piracicaba", "Piraju", "Pirajuí", "Pirangi", "Pirapora do Bom Jesus", "Pirapozinho", "Pirassununga", "Piratininga", "Pitangueiras", "Planalto", "Platina", "Poá", "Poloni", "Pompéia", "Pongaí", "Pontal", "Pontalinda", "Pontes Gestal", "Populina", "Porangaba", "Porto Feliz", "Porto Ferreira", "Potim", "Potirendaba", "Pracinha", "Pradópolis", "Praia Grande", "Pratânia", "Presidente Alves", "Presidente Bernardes", "Presidente Epitácio", "Presidente Prudente", "Presidente Venceslau", "Promissão", "Quadra", "Quatá", "Queiroz", "Queluz", "Quintana", "Rafard", "Rancharia", "Redenção da Serra", "Regente Feijó", "Reginópolis", "Registro", "Restinga", "Ribeira", "Ribeirão Bonito", "Ribeirão Branco", "Ribeirão Corrente", "Ribeirão do Sul", "Ribeirão dos Índios", "Ribeirão Grande", "Ribeirão Pires", "Ribeirão Preto", "Rifaina", "Rincão", "Rinópolis", "Rio Claro", "Rio das Pedras", "Rio Grande da Serra", "Riolândia", "Riversul", "Rosana", "Roseira", "Rubiácea", "Rubinéia", "Sabino", "Sagres", "Sales", "Sales Oliveira", "Salesópolis", "Salmourão", "Saltinho", "Salto", "Salto de Pirapora", "Salto Grande", "Sandovalina", "Santa Adélia", "Santa Albertina", "Santa Bárbara d'Oeste", "Santa Branca", "Santa Clara d'Oeste", "Santa Cruz da Conceição", "Santa Cruz da Esperança", "Santa Cruz das Palmeiras", "Santa Cruz do Rio Pardo", "Santa Ernestina", "Santa Fé do Sul", "Santa Gertrudes", "Santa Isabel", "Santa Lúcia", "Santa Maria da Serra", "Santa Mercedes", "Santa Rita d'Oeste", "Santa Rita do Passa Quatro", "Santa Rosa de Viterbo", "Santa Salete", "Santana da Ponte Pensa", "Santana de Parnaíba", "Santo Anastácio", "Santo André", "Santo Antônio da Alegria", "Santo Antônio de Posse", "Santo Antônio do Aracanguá", "Santo Antônio do Jardim", "Santo Antônio do Pinhal", "Santo Expedito", "Santópolis do Aguapeí", "Santos", "São Bento do Sapucaí", "São Bernardo do Campo", "São Caetano do Sul", "São Carlos", "São Francisco", "São João da Boa Vista", "São João das Duas Pontes", "São João de Iracema", "São João do Pau d'Alho", "São Joaquim da Barra", "São José da Bela Vista", "São José do Barreiro", "São José do Rio Pardo", "São José do Rio Preto", "São José dos Campos", "São Lourenço da Serra", "São Luís do Paraitinga", "São Manuel", "São Miguel Arcanjo", "São Paulo", "São Pedro", "São Pedro do Turvo", "São Roque", "São Sebastião", "São Sebastião da Grama", "São Simão", "São Vicente", "Sarapuí", "Sarutaiá", "Sebastianópolis do Sul", "Serra Azul", "Serra Negra", "Serrana", "Sertãozinho", "Sete Barras", "Severínia", "Silveiras", "Socorro", "Sorocaba", "Sud Mennucci", "Sumaré", "Suzanápolis", "Suzano", "Tabapuã", "Tabatinga", "Taboão da Serra", "Taciba", "Taguaí", "Taiaçu", "Taiúva", "Tambaú", "Tanabi", "Tapiraí", "Tapiratiba", "Taquaral", "Taquaritinga", "Taquarituba", "Taquarivaí", "Tarabai", "Tarumã", "Tatuí", "Taubaté", "Tejupá", "Teodoro Sampaio", "Terra Roxa", "Tietê", "Timburi", "Torre de Pedra", "Torrinha", "Trabiju", "Tremembé", "Três Fronteiras", "Tuiuti", "Tupã", "Tupi Paulista", "Turiúba", "Turmalina", "Ubarana", "Ubatuba", "Ubirajara", "Uchoa", "União Paulista", "Urânia", "Uru", "Urupês", "Valentim Gentil", "Valinhos", "Valparaíso", "Vargem", "Vargem Grande do Sul", "Vargem Grande Paulista", "Várzea Paulista", "Vera Cruz", "Vinhedo", "Viradouro", "Vista Alegre do Alto", "Vitória Brasil", "Votorantim", "Votuporanga", "Zacarias"]
        }];

var createCitiesList = function(option) {

    var next = $(option).next('select');

    if (next) {
        $(next).remove();
    }

    var cities = $.grep(states, function(e){ return e.name == $(option).val(); })[0].cities;

    var newSelect = $('<select name="cidades-brasil[]" class="cityorstate">'+'</select>').insertAfter(option);

    $(cities).each(function() {
        $(newSelect).append('<option value="'+this+'">'+this+'</option>');
    });
}

var addState = function(object) {
    var passar = true;
    $('[name="estados-brasil[]"]').each(function(){
        if ($(this).val() == "") {
            passar = false;
            alert('Você deve escolher um estado antes de adicionar outro!');
            return false;
        }
    });

    if (passar) {
        var row = $('<div class="row"></div>').insertBefore($(object).parents('.row').first());
        $(row).append('<div class="col-xs-12 text-center"></div>');
        var col = $(row).children();
        $(col).append('<select name="estados-brasil[]" class="cityorstate" onchange="createCitiesList(this);"></select>');
        var select = $(col).children();
        $(select).append('<option value="">Selecione o Estado</option>');
        $(select).append('<option value="Minas Gerais">Minas Gerais</option>');
        $(select).append('<option value="Rio de Janeiro">Rio de Janeiro</option>');
        $(select).append('<option value="São Paulo">São Paulo</option>');

        $('<span class="glyphicon glyphicon-remove" style="cursor: pointer" title="Remover" onclick="deleteRow(this);"></span>').insertAfter($(select));
    }
}

var deleteRow = function (rowChild) {
    $(rowChild).parent().remove();
}

var charQuantity = function () {
    $('#charQuantity').text($('textarea').val().length);
}

var chosenCities = function () {
    var chosenCitiesHTML = "";
    
    $('[name="estados-brasil[]"]').each(function(){
        if ($(this).val() != ""){
            chosenCitiesHTML += $(this).parent().children('[name="cidades-brasil[]"]').val() + ' - ' + states[parseInt($(this).val())].name + '<br/>';
        }
    });
    
    $('#chosenCities').html(chosenCitiesHTML);
}

var planBasic = function () {

    $("#chosenPlan").html('Básico');
    $("#totalPrice").html('R$250,00');
    
    $('#finishOrder').attr('href', '#pb');
    
}

var planInter = function () {

    $("#chosenPlan").html('Intermediário');
    $("#totalPrice").html('R$400,00');
    
    $('#finishOrder').attr('href', '#pi');
    
}

var planMassive = function () {

    $("#chosenPlan").html('Massivo');
    $("#totalPrice").html('R$750,00');
    
    $('#finishOrder').attr('href', '#pm');
    
}

$('.price-footer').click(function() {
    /*if ($('textarea').val().length < 5) {
        alert('Sua mensagem está muito curta!');
        goToMensagem();
    } else if ($('[name="cidades-brasil[]"]').length < 1) {
        alert('Sua mensagem está muito curta!');
        goToOnde();
    } else if ( $('[name="cidades-brasil[]"]').length > $(this).data('mc') ) {
        alert('Com esse plano você só pode escolher ' +$(this).data('mc')+ ' cidades!');
        goToOnde();
    } else {
        charQuantity();
        chosenCities();
        $('#confirmOrder').modal('show');
    }
    */

    $('input[name="maxcities"]').val($(this).data('mc'));

    $('#confirmOrder').modal('show');
});

var goToActive = function() {
    $('.nav-moving-bg').css({
        left: $('.active').offset().left,
        width: $('.active').outerWidth()
    });

    $('.m-nav-moving-bg').css({
        left: $('.active').offset().left,
        width: $('.active').outerWidth()
    });
}

var goToHome = function () {
    $('body').animate({scrollTop: 0}, 500);
}

var goToAbout = function () {
    $('body').animate({
        scrollTop: $('#about').offset().top -
                  ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}

var goToMensagem = function () {
    $('body').animate({
        scrollTop:  $('#mensagem').offset().top -
                   ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}

var goToOnde = function () {
    $('body').animate({
        scrollTop: $('#onde').offset().top -
                  ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}

var goToPlano = function () {
    $('body').animate({
        scrollTop: $('#plano').offset().top -
                  ($(window).width() < 768 ? $('nav.visible-xs').outerHeight() : $('nav.hidden-xs').outerHeight())
    }, 500);
}