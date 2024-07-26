export const environment = {
  name: 'prod',
  local: false,
  urlTranslate: './assets/i18n/',
  services: {
    auth: {
      root: 'https://servizilavoroauthwrapperapicloud-cxdhbbgqerfsc9h7.italynorth-01.azurewebsites.net/api/v1/',
      authUser: {
        root: 'AuthUser/',
        userDataDaCookie: 'UserDataDaCookie/',
        getProfili: 'GetProfili/',
      },
    },
    silen: {
      root: 'https://silenapimlpsdev.azurewebsites.net/api/',
      articolazioneQuote: {
        root: 'ArticolazioneQuote/',
        getAllMacrocategorie: 'GetAllMacrocategorie/',
        getMacrocategoriaById: 'GetMacrocategoriaById/',
        createMacrocategoria: 'CreateMacrocategoria/',
        updateMacrocategoria: 'UpdateMacrocategoria/',
        deleteMacrocategoria: 'DeleteMacrocategoria/',
        getAllSottocategorie: 'GetAllSottocategorie/',
        getSottocategoriaById: 'GetSottocategoriaById/',
        createSottocategoria: 'CreateSottocategoria/',
        updateSottocategoria: 'UpdateSottocategoria/',
        deleteSottocategoria: 'DeleteSottocategoria/',
        createArticolazioneDPCM: 'CreateArticolazioneDPCM/',
        getArticolazioneQuoteDPCM: 'GetArticolazioneQuoteDPCM/',
      },
      decretiFlussi: {
        root: 'DecretiFlussi/',
        createDPCM: 'CreateDPCM/',
        getDPCMById: 'GetDPCMById/',
        getAllDPCM: 'GetAllDPCM/',
        getDPCMByFilter: 'GetDPCMByFilter/',
        updateDPCM: 'UpdateDPCM/',
        deleteDecreto: 'DeleteDecreto/',
        printDecreto: 'PrintDecreto/',
        downloadDPCM: 'DownloadDPCM/',
      },
      ripartizioneQuote: {
        root: 'RipartizioneQuote/',
        attribuzioneQuoteDPCM: 'AttribuzioneQuoteDPCM/',
        getRipartizioneQuoteDPCM: 'GetRipartizioneQuoteDPCM/',
        ripartizioneQuoteNazionaliDPCM: 'RipartizioneQuoteNazionaliDPCM/',
        ripartizioneQuoteRegionaliDPCM: 'RipartizioneQuoteRegionaliDPCM/',
        ripartizioneQuoteProvincialiDPCM: 'RipartizioneQuoteProvincialiDPCM/',
        deleteQuoteNazionali: 'DeleteQuoteNazionali/',
        deleteQuoteRegionali: 'DeleteQuoteRegionali/',
        deleteQuoteProvinciali: 'DeleteQuoteProvinciali/',
      },
    },
  },
};
