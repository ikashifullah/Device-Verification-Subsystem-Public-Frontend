/*Copyright (c) 2018 Qualcomm Technologies, Inc.
  All rights reserved.

  Redistribution and use in source and binary forms, with or without modification, are permitted (subject to the limitations in the disclaimer below) provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Qualcomm Technologies, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
  NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY THIS LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 
i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
            "welcomeApp": "Welcome to LSMS",
            "homeLink"  : "Home",
            "dashboardLink": "Dashboard",
            "checkStatus.header": "Check IMEI Status",
            "checkStatus.label": "Enter the IMEI",
            "checkStatus.placeholder": "Enter 14 to 16 digits characters IMEI",
            "deviceStatusTable.title": "Device Status",
            "deviceStatusTable.brand": "Brand",
            "deviceStatusTable.modelName": "Model Name",
            "deviceStatusTable.complianceStatus": "IMEI Compliance Status",
            "deviceStatusTable.reason": "Reason for non-Compliance",
            "deviceStatusTable.link": "Link to Mitigation Help Content",
            "deviceStatusTable.date": "Block as of Date",
            "submit" : "Submit"
        }
      },
      es: {
        translations: {
            "welcomeApp": "Bienvenido a LSMS",
            "homeLink"  : "Casa",
            "dashboardLink": "Tablero",
            "checkStatus.header": "Verifique el estado de IMEI",
            "checkStatus.label": "Ingrese el IMEI",
            "checkStatus.placeholder": "Ingrese 14 to 16 dígitos IMEI",
            "deviceStatusTable.title": "Estado del dispositivo",
            "deviceStatusTable.brand": "Marca",
            "deviceStatusTable.modelName": "Nombre del modelo",
            "deviceStatusTable.complianceStatus": "Estado de cumplimiento IMEI",
            "deviceStatusTable.reason": "Motivo de incumplimiento",
            "deviceStatusTable.link": "Enlace al contenido de ayuda de mitigación",
            "deviceStatusTable.date": "Bloquear a partir de la fecha",
            "submit" : "Enviar"
        }
      },
      id: {
        translations: {
            "welcomeApp": "Selamat datang di LSMS",
            "homeLink"  : "Rumah",
            "dashboardLink": "Dasbor",
            "checkStatus.header": "Periksa Status IMEI",
            "checkStatus.label": "Masukkan IMEI",
            "checkStatus.placeholder": "Masukkan 14 to 16 digit IMEI",
            "deviceStatusTable.title": "Status Perangkat",
            "deviceStatusTable.brand": "Merek",
            "deviceStatusTable.modelName": "Nama model",
            "deviceStatusTable.complianceStatus": "Status Kepatuhan IMEI",
            "deviceStatusTable.reason": "Alasan ketidaksesuaian",
            "deviceStatusTable.link": "Tautan ke Konten Bantuan Mitigasi",
            "deviceStatusTable.date": "Blokir Tanggal",
            "submit" : "Menyerahkan"
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
 
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
 
    keySeparator: false, // we use content as keys
 
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },
 
    react: {
      wait: true
    }
  });
 
export default i18n;