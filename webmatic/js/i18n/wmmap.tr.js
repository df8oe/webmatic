// DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    // Geräte
    AKKU__LEVEL: "şarj durumunu",
    AKKU__STATUS__0: "şarj damlama",
    AKKU__STATUS__1: "pil yükleme",
    AKKU__STATUS__2: "pil verilen",
    AKKU__STATUS__3: "Bilinmeyen pil durumu",
    ALARMACTUATOR__STATE__TRUE: "Alarm",
    ALARMACTUATOR__STATE__FALSE: "Tamam",
    ALARMACTUATOR__ERROR_POWER__1: "Şebeke gerilimi yanlış",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "sabotaj mesajı",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "arızalı pil",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "Açma süresi",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__TRUE: "pil düşük",
    ALARMACTUATOR__LOWBAT__FALSE: "-",
    BLIND__STOP: "stop",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "körler süresi",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "dolum seviyesi",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "sensör sıklığı",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__TRUE: "on",
    CLIMATECONTROL_REGULATOR__STATE__FALSE: "kapalı",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "auto",
    CLIMATECONTROL_REGULATOR__MODE__1: "konfor",
    CLIMATECONTROL_REGULATOR__MODE__2: "ECO",
    CLIMATECONTROL_REGULATOR__MODE__3: "kapalı",
    CLIMATECONTROL_REGULATOR__VACATION__0: "kapalı",
    CLIMATECONTROL_REGULATOR__VACATION__1: "planlı",
    CLIMATECONTROL_REGULATOR__VACATION__2: "aktif",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__TRUE: "ters kontrolü",
    CLIMATECONTROL_REGULATOR__SET_INVERT__FALSE: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "devleti anahtarı",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "Kontrol panelindeki alınan manipüle değerin",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "dönüştürülmüş set diferansiyel",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "vana açma seti",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__TRUE: "yaz modu",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__FALSE: "Yaz modu kapalı",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "vana kapalı",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "vanası açık",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "otomatik olarak",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "Elle",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "Taraf",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "konfor sıcaklığı",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "aksilik",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "penceresi açık sıcaklık",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "Parti / Tatil bitmeyen",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "sıcaklık",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "Mevcut nem",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "halsiz vana aktüatör",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "Çok geniş bir ürün yelpazesi ayarlama",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "çok küçük aralık ayarlama",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "Bağlantı Hatası",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "pil düşük",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "Vana pozisyon hatası",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "vana açma",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "boost modu",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "indirme",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "manuel",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "konfor",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "otomatik",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "süresi artırmak",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "pil Durumu",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "Tatil Modu Başlat",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "sıcaklığını ayarlamak",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "başlangıç ​​saati",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "zamanı son",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__FALSE: "kapalı",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__TRUE: "Açık",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "vana açma",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "valf sürücü engellendi",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "vana gevşek drive",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "ayar aralığı çok küçük",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "pil düşük",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "vana aktüatör pozisyonu ofset",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "sıcaklık",
    CLIMATECONTROL_VENT_DRIVE__ALARM__TRUE: "valf sürücü engellendi",
    CLIMATECONTROL_VENT_DRIVE__ALARM__FALSE: "-",
    CONDITION_POWER__DECISION_VALUE: "** CONDITION_POWER__DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "** CONDITION_CURRENT__DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "** CONDITION_VOLTAGE__DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "** CONDITION_FREQUENCY__DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "** DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "** DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_ANALOG_OUTPUT__STATE__TRUE: "üzerinde",
    DIGITAL_ANALOG_OUTPUT__STATE__FALSE: "kapalı",
    DIGITAL_INPUT__FREQUENCY: "** DIGITAL_INPUT__FREQUENCY",
    DIGITAL_INPUT__STATE__TRUE: "evet",
    DIGITAL_INPUT__STATE__FALSE: "değil",
    DIGITAL_OUTPUT__STATE__TRUE: "üzerinde",
    DIGITAL_OUTPUT__STATE__FALSE: "kapalı",
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "durumunu değiştirmek",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "Geçen karartma geri",
    DIMMER__RAMP_TIME: "karartma",
    DIMMER__ON_TIME: "görev",
    DIMMER__RAMP_STOP: "Dur karartma",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "akım çıkışı",
    DIMMER__ENERGY_COUNTER: "Mevcut enerji tüketimi",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "hatası şarj",
    DIMMER__ERROR_REDUCED__FALSE: "-",
    DIMMER__ERROR_REDUCED__TRUE: "gücünü azalttı",
    DIMMER__ERROR_OVERHEAT__FALSE: "-",
    DIMMER__ERROR_OVERHEAT__TRUE: "aşırı ısınma",
    DIMMER__ERROR_OVERLOAD__FALSE: "-",
    DIMMER__ERROR_OVERLOAD__TRUE: "aşırı yükleme",
    DIMMER__LEVEL_REAL: "gerçek değeri",
    DISPLAY__TEXT: "ekran",
    DISPLAY__BULB: "ampul",
    DISPLAY__SWITCH: "anahtarı",
    DISPLAY__WINDOW: "pencere",
    DISPLAY__DOOR: "Kapı",
    DISPLAY__BLIND: "kör",
    DISPLAY__SCENE: "sahne",
    DISPLAY__PHONE: "telefon",
    DISPLAY__BELL: "çan",
    DISPLAY__CLOCK: "saat",
    DISPLAY__ARROW_UP: "yukarı ok",
    DISPLAY__ARROW_DOWN: "aşağı ok",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "°C",
    DISPLAY__UNIT__4: "°F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "1 bip",
    DISPLAY__BEEP__2: "2 bip",
    DISPLAY__BEEP__3: "3 bip",
    DISPLAY__BACKLIGHT__0: "arka ışık kapalı iken",
    DISPLAY__BACKLIGHT__1: "konulu arka",
    DISPLAY__BACKLIGHT__2: "arka yavaşça yanıp sönen",
    DISPLAY__BACKLIGHT__3: "Işık hızlı yanıp sönüyor",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "Kısa basın",
    INPUT_OUTPUT__PRESS_LONG: "Uzun basın",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "kapalı devlet",
    KEY__LED_STATUS__1: "Devlet red",
    KEY__LED_STATUS__2: "Devlet yeşil",
    KEY__LED_STATUS__3: "Devlet turuncu",
    KEY__LED_SLEEP_MODE: "-",
    KEY__PRESS_SHORT: "Kısa basın",
    KEY__PRESS_LONG: "Uzun basın",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "anlık",
    KEY__RESET: "reboot",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__TRUE: "Açık",
    KEYMATIC__STATE__FALSE: "kapatmak",
    KEYMATIC__OPEN: "açmak",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__TRUE: "belirsiz durum",
    KEYMATIC__STATE_UNCERTAIN__FALSE: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "birleştirme hatası",
    KEYMATIC__ERROR__2: "Motor durdu",
    MOTION_DETECTOR__BRIGHTNESS: "parlaklık",
    MOTION_DETECTOR__SET_BRIGHTNESS: "parlaklık ayarı",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "Bir sonraki iletim",
    MOTION_DETECTOR__MOTION__TRUE: "hareket algılanırsa",
    MOTION_DETECTOR__MOTION__FALSE: "Hiçbir hareket algılanırsa",
    MOTION_DETECTOR__SET_MOTION: "hareketi set",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "sabotaj tetikledi",
    POWER__LOWBAT: "pil düşük",
    POWER__BAT_VOLTAGE: "akü gerilimi",
    POWERMETER__BOOT__TRUE: "** POWERMETER__BOOT__TRUE",
    POWERMETER__BOOT__FALSE: "** POWERMETER__BOOT__FALSE",
    POWERMETER__ENERGY_COUNTER: "Mevcut enerji tüketimi",
    POWERMETER__POWER: "akım çıkışı",
    POWERMETER__CURRENT: "amper",
    POWERMETER__VOLTAGE: "anahtarı çıkışındaki voltaj",
    POWERMETER__FREQUENCY: "Frekans",
    POWERMETER__SUM_1H: "Geçen saat enerji tüketimi",
    POWERMETER__SUM_24H: "Son 24 saate ait enerji tüketimi",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "Gaz enerji sayaçları",
    POWERMETER_IGL__GAS_POWER: "Mevcut gaz çıkışı",
    POWERMETER_IGL__ENERGY_COUNTER: "enerji sayaçları",
    POWERMETER_IGL__POWER: "akım çıkışı",
    PULSE_SENSOR__SEQUENCE_OK: "dizisi kabul",
    RAINDETECTOR__STATE__0: "kuru",
    RAINDETECTOR__STATE__1: "Yağmur",
    RAINDETECTOR_HEAT__STATE__TRUE: "Isıtma",
    RAINDETECTOR_HEAT__STATE__FALSE: "kapalı ısıtma",
    RAINDETECTOR_HEAT__ON_TIME: "görev döngüsü (ısıtma)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__TRUE: "on",
    RELAIS__STATE__FALSE: "kapalı",
    RELAIS__VALUE: "nominal değer",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "görev",
    RELAIS__RAMP_TIME: "karartma",
    RGBW_AUTOMATIC__PROGRAM__0: "kapalı",
    RGBW_AUTOMATIC__PROGRAM__1: "yavaş",
    RGBW_AUTOMATIC__PROGRAM__2: "normal",
    RGBW_AUTOMATIC__PROGRAM__3: "hızlı",
    RGBW_AUTOMATIC__PROGRAM__4: "bonfire",
    RGBW_AUTOMATIC__PROGRAM__5: "şelale",
    RGBW_AUTOMATIC__PROGRAM__6: "TV",
    RGBW_AUTOMATIC__ON_TIME: "görev",
    RGBW_AUTOMATIC__RAMP_TIME: "karartma",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "Geçerli parlaklık",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "renkli",
    RGBW_COLOR__ON_TIME: "görev",
    RGBW_COLOR__RAMP_TIME: "karartma",
    RGBW_COLOR__ACT_BRIGHTNESS: "Mevcut Brigthness",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "HSV renk değeri",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "kilitli",
    ROTARY_HANDLE_SENSOR__STATE__1: "uçlu",
    ROTARY_HANDLE_SENSOR__STATE__2: "açmak",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "sabotaj tetikledi",
    ROTARY_HANDLE_SENSOR__LOWBAT__TRUE: "pil düşük",
    ROTARY_HANDLE_SENSOR__LOWBAT__FALSE: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "toplam tüketim",
    SENSOR__SUM_DATE: "damgası toplam tüketim sayacı başlatılırken",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "toplam tüketim reset",
    SENSOR__CONTROL__0: "bilinmeyen",
    SENSOR__CONTROL__1: "AC metre",
    SENSOR__CONTROL__2: "Etkili güç ölçer",
    SENSOR__CONTROL__3: "gaz sayacı",
    SENSOR__SENSOR__TRUE: "açmak",
    SENSOR__SENSOR__FALSE: "kapalı",
    SENSOR__STATE__TRUE: "on",
    SENSOR__STATE__FALSE: "kapalı",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "ortalama tüketim (5 dk)",
    SENSOR__MAX5MINUTES: "Maksimum tüketimi (5 dk)",
    SENSOR__SUM_1H: "tüketimi son saat",
    SENSOR__MAX_1H: "Maksimum tüketimi son saat",
    SENSOR__SUM_24H: "tüketimi (24 h)",
    SENSOR__MAX_24H: "Maksimum tüketimi (24 h)",
    SENSOR__METER: "metre",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "Son ölçüm aralığı ortalama tüketim",
    SENSOR__LAST_TICKS: "saniye süre 10 (GZ) son ölçüm aralığı",
    SENSOR__UNITSPTURN: "dönüşüm faktörü",
    SENSOR__DISTANCE: "yakınlık sensörü",
    SENSOR__F_PERCENT: "seviye yüzde",
    SENSOR__F_LEVEL: "seviye",
    SENSOR__F_VOLUME: "kapasite",
    SENSOR__RELAIS1__TRUE: "rölesi 1",
    SENSOR__RELAIS1__FALSE: "rölesi 1 kapalı",
    SENSOR__RELAIS2__TRUE: "rölesi 2",
    SENSOR__RELAIS2__FALSE: "Röle 2 kapalı",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "sensör tipi",
    SENSOR__ERROR: "hata iletisi",
    SENSOR__ON_TIME: "görev",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "CO<sub>2</sub> konsantrasyon normal",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "CO<sub>2</sub> konsantrasyon artışı",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "CO<sub>2</sub> konsantrasyon büyük ölçüde arttı",
    SHUTTER_CONTACT__STATE__TRUE: "açmak",
    SHUTTER_CONTACT__STATE__FALSE: "kapalı",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "sabotaj tetikledi",
    SHUTTER_CONTACT__LOWBAT__TRUE: "pil düşük",
    SHUTTER_CONTACT__LOWBAT__FALSE: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__TRUE: "on",
    SIGNAL_CHIME__STATE__FALSE: "kapalı",
    SIGNAL_CHIME__ON_TIME: "görev",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__TRUE: "on",
    SIGNAL_LED__STATE__FALSE: "kapalı",
    SIGNAL_LED__ON_TIME: "görev",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__TRUE: "duman kayıtlı",
    SMOKE_DETECTOR__STATE__FALSE: "Tamam",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "alarm sınaması başarısız",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "bozulmuş duman odası",
    SMOKE_DETECTOR__LOWBAT__TRUE: "pil düşük",
    SMOKE_DETECTOR__LOWBAT__FALSE: "-",
    SMOKE_DETECTOR_TEAM__STATE__TRUE: "duman kayıtlı",
    SMOKE_DETECTOR_TEAM__STATE__FALSE: "Tamam",
    STATUS_INDICATOR__STATE__TRUE: "on",
    STATUS_INDICATOR__STATE__FALSE: "kapalı",
    STATUS_INDICATOR__ON_TIME: "görev",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "zamanlayıcıyı iptal",
    SYSTEM__TIMER_SET: "sayacını ayarlamak",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__TRUE: "on",
    SYSTEM__STATE__FALSE: "kapalı",
    SYSTEM__TIMER_GET: "kalan süre",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "Kısa basın",
    SYSTEM__CMD_RUNL: "Uzun basın",
    SYSTEM__CMD_SETS: "-",
    SYSTEM__CMD_SETL: "-",
    SYSTEM__CMD_RETS: "-",
    SYSTEM__CMD_RETL: "-",
    SYSTEM__CMD_QUERY_RET: "-",
    SYSTEM__CMD_EXEC: "-",
    SYSTEM__CMD_KILL: "-",
    SYSTEM__LOGIT: "-",
    SYSTEM__SYSLOG: "-",
    SYSTEM__SET_STATE: "** SYSTEM__SET_STATE",
    SYSTEM__RAND: "** SYSTEM__RAND",
    SYSTEM__HOLD: "** SYSTEM__HOLD",
    SYSTEM__CONTROL: "** SYSTEM__CONTROL",
    SYSTEM__SEND: "WebUI üzerine tuş",
    SYSTEM__MAILTO: "e-posta alıcısı",
    SYSTEM__MAILCC: "e-posta cc",
    SYSTEM__SUBJECT: "e-posta konusu",
    SYSTEM__TYPE__0: "metin",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "Alarm",
    SYSTEM__TEXT: "metin",
    SYSTEM__TEMPLATEID: "Şablon Kimliği",
    SYSTEM__OPTION_1: "Önceden tanımlanmış bir şablonla 1 verileri",
    SYSTEM__OPTION_2: "Önceden tanımlanmış şablondan 2 verileri",
    SYSTEM__OPTION_3: "Önceden tanımlanmış şablondan 3 verileri",
    SYSTEM__OPTION_4: "Önceden tanımlanmış şablondan 4 veri",
    SYSTEM__OPTION_5: "Önceden tanımlanmış şablondan 5 veri",
    SYSTEM__RETURN: "işlev çağrısı ile dönüş değeri",
    SYSTEM__PHONE: "SMS telefon numarası",
    SYSTEM__PRIORITY__0: "düşük öncelikli",
    SYSTEM__PRIORITY__1: "Öncelikli normal",
    SYSTEM__PRIORITY__2: "Öncelikli önemli",
    SYSTEM__PRIORITY__3: "yüksek öncelikli",
    SYSTEM__PRIORITY__4: "Kritik öncelik",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "adresi kayıtlı",
    SWITCH__IP: "DNS kararı ile adresi",
    SWITCH__UNREACH_CTR: "girişimleri başarısız oldu",
    SWITCH__STATE__TRUE: "on",
    SWITCH__STATE__FALSE: "kapalı",
    SWITCH__ON_TIME: "görev",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "durumunu değiştirmek",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "power-ups (1 saat),",
    SWITCH__TIME_ON_1H: "(açık) toplam süre (1 saat),",
    SWITCH__TIME_OFF_1H: "toplam süresi (kapalı) (1 saat),",
    SWITCH__TIME_ON: "(açık) son süre",
    SWITCH__TIME_OFF: "Geçen süre (kapalı)",
    SWITCH__TIME_ON_SUM: "(açık) toplam süresi",
    SWITCH__SWITCH_SUM: "power-ups sayısı",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__TRUE: "on",
    SWITCH__TIME_STATE__FALSE: "kapalı",
    SWITCH__INFO_LED__0: "kapalı",
    SWITCH__INFO_LED__1: "yeşil",
    SWITCH__INFO_LED__2: "turuncu",
    SWITCH__INFO_LED__3: "kırmızı",
    SWITCH__SUM_RESET: "sayacı sıfırlama",
    SWITCH__SET_STATE: "set değeri",
    SWITCH__NIGHT_MODE: "gece modu",
    SWITCH__NIGHT_MODE__TRUE: "gece modu",
    SWITCH__NIGHT_MODE__FALSE: "-",
    SWITCH__POWER: "akım çıkışı",
    SWITCH__ERROR_OVERLOAD__TRUE: "aşırı yükleme",
    SWITCH__ERROR_OVERLOAD__FALSE: "-",
    SWITCH__ENERGY_COUNTER: "Mevcut enerji tüketimi",
    SWITCH__RCVS: "** SWITCH__RCVS",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__TRUE: "pil düşük",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__TRUE: "iletişim hatası",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__TRUE: "penceresi açılacaktır",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "akü voltajı",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "sıcaklık",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "Mevcut nem",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "boost modu",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "indirme",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "manuel",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "konfor",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "otomatik",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "sıcaklık",
    THERMALCONTROL_TRANSMIT__PARTY_START: "başlangıç ​​saati",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "bitiş zamanı",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__TRUE: "tilt kayıtlı",
    TILT_SENSOR__STATE__FALSE: "Tamam",
    TILT_SENSOR__LOWBAT__TRUE: "pil düşük",
    TILT_SENSOR__LOWBAT__FALSE: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "Geçen karartma geri",
    VIRTUAL_DIMMER__RAMP_TIME: "karartma",
    VIRTUAL_DIMMER__ON_TIME: "görev",
    VIRTUAL_DIMMER__RAMP_STOP: "karartma dur",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "hatası şarj",
    VIRTUAL_DIMMER__ERROR_REDUCED__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__TRUE: "gücünü azalttı",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__TRUE: "aşırı ısınma",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__TRUE: "aşırı yükleme",
    VIRTUAL_DIMMER__LEVEL_REAL: "gerçek değeri",
    VIRTUAL_KEY__PRESS_SHORT: "Kısa basın",
    VIRTUAL_KEY__PRESS_LONG: "Uzun basın",
    VIRTUAL_KEY__LEVEL: "-",
    WATERDETECTIONSENSOR__STATE__0: "kuru",
    WATERDETECTIONSENSOR__STATE__1: "nemli",
    WATERDETECTIONSENSOR__STATE__2: "ıslak",
    WATERDETECTIONSENSOR__LOWBAT__TRUE: "pil düşük",
    WATERDETECTIONSENSOR__LOWBAT__FALSE: "-",
    WEATHER__HUMIDITY: "nem",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "sıcaklık",
    WEATHER__WIND_SPEED: "rüzgar hızı",
    WEATHER__WIND_DIRECTION: "rüzgar yönü",
    WEATHER__WIND_DIRECTION_RANGE: "rüzgar yönü aralığı",
    WEATHER__SUNSHINEDURATION: "güneşlenme süresi",
    WEATHER__RAINING__TRUE: "Yağmur",
    WEATHER__RAINING__FALSE: "-",
    WEATHER__RAIN_COUNTER: "yağış",
    WEATHER__RAIN_CTR: "yağış",
    WEATHER__DEW_POINT: "çiy noktası",
    WEATHER__ABS_HUMIDITY: "mutlak nem",
    WEATHER__TEMP_MIN_24H: "min sıcaklığı (24 saat),",
    WEATHER__TEMP_MAX_24H: "max sıcaklığı (24 saat).",
    WEATHER__HUM_MIN_24H: "min nem (24 h)",
    WEATHER__HUM_MAX_24H: "max nem (24 saat).",
    WEATHER__WIND_MAX_24H: "max rüzgar hızı (24 h)",
    WEATHER__RAIN_CTR_24H: "yağış (24 saat)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "parlaklık",
    WEATHER__LOWBAT__TRUE: "pil düşük",
    WEATHER__LOWBAT__FALSE: "-",
    WEATHER__AIR_PRESSURE: "basınç",
    WEATHER__SET_HUMIDITY: "nem set",
    WEATHER__MEDIAN: "merkezi değer",
    WEATHER__MEAN: "ortalama",
    WEATHER__BRIGHTNESS_WEST: "parlaklık batı",
    WEATHER__BRIGHTNESS_SOUTH: "parlaklık güney",
    WEATHER__BRIGHTNESS_EAST: "parlaklık doğu",
    WEATHER_TRANSMIT__HUMIDITY: "nem",
    WEATHER_TRANSMIT__TEMPERATURE: "sıcaklık",
    WEBCAM__INFO: "bilgi metni",
    WEBCAM__IMAGE: "Resim",
    WEBCAM__PTZ_CMD: "Önceden tanımlanmış fonksiyon",
    WEBCAM__IR__0: "kızılötesi LED kapalı",
    WEBCAM__IR__1: "kızılötesi LED oto",
    WEBCAM__IR__2: "kızılötesi LED",
    WINMATIC__SPEED: "hız",
    WINMATIC__STOP: "stop",
    WINMATIC__RELOCK_DELAY: "otomatik bir süre sonra kilit",
    WINMATIC__STATE_UNCERTAIN__TRUE: "belirsiz durum",
    WINMATIC__STATE_UNCERTAIN__FALSE: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "hata dönüşlü aktüatör",
    WINMATIC__ERROR__2: "hata tilt drive",
    WRAPPER__MEDIAN: "merkezi değer",
    WRAPPER__MEAN: "ortalama",
    WRAPPER__SET_STATE: "durumunu ayarlamak",
    WRAPPER__TIME_ON_1H: "(açık) toplam süre (1 saat),",
    WRAPPER__TIME_OFF_1H: "toplam süresi (kapalı) (1 saat),",
    WRAPPER__SWITCH_1H: "power-ups (1 saat),",
    WRAPPER__TIME_ON_24H: "(24 saat) (on) toplam süresi",
    WRAPPER__TIME_OFF_24H: "toplam süresi (kapalı) (24 saat)",
    WRAPPER__SWITCH_24H: "power-ups (24 h)",
    WRAPPER__PERCENT_ON_24H: "(açık) yüzde (24 h)",
    WRAPPER__TIME_ON_168H: "(7 gün) (üzerine) toplam süresi",
    WRAPPER__TIME_OFF_168H: "toplam süresi (kapalı) (7 gün)",
    WRAPPER__SWITCH_168H: "power-ups (7 Tage)",
    WRAPPER__PERCENT_ON_168H: "(7 gün) (on) yüzdesi",
    WRAPPER__TIME_ON_HHH: "(açık) toplam süresi",
    WRAPPER__TIME_OFF_HHH: "toplam süresi (kapalı)",
    WRAPPER__SWITCH_HHH: "power-ups",
    WRAPPER__PERCENT_ON_HHH: "yüzdesi",
    WRAPPER__STATE__TRUE: "on",
    WRAPPER__STATE__FALSE: "kapalı",
    WRAPPER__TIME_ON: "(açık) son süre",
    WRAPPER__TIME_OFF: "Geçen süre (kapalı)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    // Servicemeldungen
    ALARMDP__CONFIG_PENDING: "yapılandırma verileri iletilir",
    ALARMDP__DEVICE_IN_BOOTLOADER: "aygıt yeniden başlatıldığında",
    ALARMDP__LOWBAT: "pil düşük",
    ALARMDP__STICKY_UNREACH: "iletişim kesintiye uğramıştır",
    ALARMDP__U_SOURCE_FAIL: "Güç kaynağı arızası",
    ALARMDP__UNREACH: "iletişim anda rahatsız",
    ALARMDP__UPDATE_PENDING: "Mevcut güncelleme",
    ALARMDP__USBH_POWERFAIL: "USB host devre dışı",
    //Sprachen
    DE: "Alman",
    EN: "İngilizce",
    ES: "İspanyol",
    FR: "Fransız",
    PT: "Portekiz",
    RU: "Rus",
    TR: "Türk",
    ZH: "Çin",
    LANGUAGE: "Dil",
    //CCU Bezeichnungen
    ROOMLIVINGROOM: "Oturma odasi",
    ROOMKITCHEN: "Mutfak",
    ROOMBEDROOM: "Yatak odasi",
    ROOMCHILDRENSROOM1: "Çocuk odasi 1",
    ROOMCHILDRENSROOM2: "Çocuk odasi 2",
    ROOMOFFICE: "Ev ofis",
    ROOMBATHROOM: "Banyo",
    ROOMGARAGE: "Garaj",
    ROOMHWR: "Bakim ve temizlik odasi",
    ROOMGARDEN: "Bahçe",
    ROOMTERRACE: "Teras",
    FUNCLIGHT: "Işık",
    FUNCHEATING: "Kalorifer",
    FUNCCLIMATECONTROL: "İklim koşulları",
    FUNCWEATHER: "Hava durumu",
    FUNCENVIRONMENT: "Çevre",
    FUNCSECURITY: "Güvenlik",
    FUNCLOCK: "Kilit",
    FUNCBUTTON: "Tus takimi",
    FUNCCENTRAL: "Merkez",
    FUNCENERGY: "Enerji Yönetimi",
    SYSVARPRESENCE : "varlık",
    SYSVARPRESENCEMSG : "varlık",
    SYSVARPRESENCEPRESENT : "mevcut",
    SYSVARPRESENCENOTPRESENT : "mevcut değildir",
    SYSVARALARMZONE1 : "Alarm Bölge 1",
    SYSVARALARMZONE1MSG : "Alarm Mesajı Bölge 1",
    SYSVARALARMZONE1TRIGGERED : "tetiklenir",
    SYSVARALARMZONE1NOTTRIGGERED : "değil yangın",
    //Andere Bezeichnungen
    OPEN: "açmak",
    OPEN_SHORT: "Açık",
    KAPAT: "kapatmak",
    CLOSE_SHORT: "yakın",
    LOCKED: "kilitli",
    LOCK: "kilit",
    ON: "ON",
    OFF: "kapalı",
    MAX: "max",
    MED: "med",
    MIN: "min",
    RUN: "koş",
    SAVE: "save",
    YES: "evet",
    NO: "hayır",
    VISIBILITY: "görünürlük",
    DELETE: "silmek",
    UPLOAD: "resim upload",
    VARIABLES: "Sistem değişkenleri",
    PROGRAMS: "programları",
    FAVORITES: "Sık",
    ROOMS: "oda",
    FUNCTIONS: "fonksiyonları",
    EDIT: "düzenlemek",
    OPTIONS: "seçenekler",
    OPTIONS_CLIENT: "Bu cihaz için seçenekler",
    TEST_DEVICE: "Test sayfası HM",
    TEST_CUXD: "test sayfası CUXD",
    UNKNOWN_ERROR: "Bilinmeyen bir hata",
    NO_SERVICE_MESSAGES: "yok servis mesajları.",
    UNKNOWN_VAR_TYPE: "bilinmeyen değişken türü",
    SETTINGS: "ayarlar",
    TIME_SEC_SINGULAR: "ikinci",
    TIME_SEC_PLURAL: "saniye",
    TIME_MIN_SINGULAR: "dakika",
    TIME_MIN_PLURAL: "dakikalar",
    TIME_H_SINGULAR: "Saat",
    TIME_H_PLURAL: "Saat",
    TIME_DAY_SINGULAR: "gün",
    TIME_DAY_PLURAL: "Gün",
    TIME_W_SINGULAR: "hafta",
    TIME_W_PLURAL: "hafta",
    TIME_MON_SINGULAR: "Ay",
    TIME_MON_PLURAL: "aylar",
    TIME_Y_SINGULAR: "Yıl",
    TIME_Y_PLURAL: "yıllar",
    TIME_PREFIX: " ",
    TIME_SUFFIX: "önce",
    LOADING: "şarj",
    SET: "set",
    DEFAULT: "default",
    BLACK: "Siyah",
    PINK: "pink",
    GREEN: "yeşil",
    YELLOW: "sarı",
    GREY: "gri",
    BLUE: "mavi",
    RED: "kırmızı",
    Brown: "kahverengi",
    WHITE: "Beyaz",
    BRAZIL: "Brazil",
    GERMANY: "Almanya",
    SHOW: "show",
    HIDE: "gizlemek",
    NO_VALUE: "hayır",
    SMALL: "Küçük",
    BIG: "büyük",
    GRAPHICS_SIZE: "grafik Boyut",
    FILTER: "filtreleme veri ...",
    TRANSFER: "transfer ...",
    DELAY: "değeri hala burada sadece bir gecikmeden sonra cihaza aktarılır ve gösterilir.",
    TRANSFER_OK: "Tamam!",
    IMAGE_UPLOAD: "Bu sadece JPG, GIF ya da PNG yüklenir yapabilir!",
    START: "start ...",
    NEW_VERSION: "Yeni WebMatic versiyonu",
    DOWNLOAD: "indirme linki",
    MANUAL: "sadece manuel yürütme",
    OPERATABLE: "çalıştırılabilir",
    HISTORIAN_DURATION: "Son...",
    CHOOSE_THEME: "seç Tema",
    NOT_SELECTED: "küresel Ayar",
    DESIGN: "görünüş",
    FONT: "yazı",
    MENU: "Menü girişleri",
    DEFAULT_OPEN: "İlk aramayı Display",
    DEFAULT_READONLY: "Değişken standart salt okunur",
    HISTORIAN_WARNING: "Ayarlar> Seçenekler URL altında Enter",
    NEW_UPDATES_WARNING: "Yeni sürümleri ile ilgili bilgiler",
    STABLE: "Sadece kararlı sürümleri",
    ALPHA: "Ayrıca alfa sürümleri",
    OTHERS: "Diğerleri",
    DONT_LEAVE: "Sayfa bırakarak yanlışlıkla önleyin",
    CHOOSE: "seçiniz",
    DELETE_SETTINGS: "Ayarları silmek",
    RELOAD: "yeniden",
    CLIENT_SETTINGS: "müşterinin ayarlar",
    CLIENT_TITLE: "müşteri adı",
    DEFAULT_SORT: "Standart sıralama",
    ALPHABETICAL: "alfabetik",
    MANUALLY: "elle",
    DELETE_SETTINGS_WARNING: "Dikkat, seçilen istemci tüm ayarlar silinecektir.",
    END_CLIENT_MODUS: "Bitiş Client Ayar Modu",
    REMOVE_MESSAGES: "Eski bozuklukları kaldır",
    ABOUT: "yaklaşık",
    SERVICE_NOTE: "servis Bildirimleri",
    NO_DISORDERS: "Henüz servis mesajları",
    TWO_SITES_VERSION: "2 sayfada Ekran",
    TWO_SITES_TRANSITION: "Sayfanın değişiminde etkisi",
    BACK: "sırt",
    NUMBER_OF_COLUMNS: "Sütun sayısı",
    STEP: "adım",
    FACTOR: "faktör",
    SHOW_DESCRIPTION: "göster Açıklama",
    SHOW_LAST_TIME_USED: "kullanılan en son ne zaman göster",
    WORKSPACE: "işyeri",
    ONLY_PIC: "sadece grafik",
    DIVIDE: "bölme",
    ADD_DIVIDER: "bölümü eklemek",
    UNSORTED: "sıralanır",
    SAVE_AND_RELOAD: "kaydetmek ve yeniden",
    RELOAD_CCU_CHANGES: "değişim bulundu"
};