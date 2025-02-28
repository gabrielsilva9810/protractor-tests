exports.config = {
    directConnect: true,  // Conecta direto ao navegador sem precisar do Selenium Server
    chromeDriver: require('chromedriver').path,
    specs: ['specs/*.spec.js'],  // Define quais arquivos de teste rodar
    
    capabilities: {
      browserName: 'chrome'  // Define o navegador (pode ser 'firefox' também)
      
    },
    framework: 'jasmine',  // Define o framework de testes
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000  // Tempo máximo para cada teste rodar
    }

  };
