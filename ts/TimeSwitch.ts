function dateToString(date: Date) {
    return date.toISOString().split('T')[0];
}
function data2DateFormat(data: { user_id: string; screen_name: string; posted_time: number; }[]) {
    const dateTable = [];
    for (const item of data) {
        dateTable.push(dateToString(new Date(item.posted_time)));
    }
    return dateTable;
}

const data1 = [
    {
        "user_id": "438419104",
        "screen_name": "kamilmunim",
        "posted_time": 1701619104000
    },
    {
        "user_id": "151798880",
        "screen_name": "PetraJayaMP",
        "posted_time": 1701683220000
    },
    {
        "user_id": "115603899",
        "screen_name": "DrZahidHamidi",
        "posted_time": 1701683368000
    },
    {
        "user_id": "1743486906",
        "screen_name": "ZambryOfficial",
        "posted_time": 1701682175000
    },
    {
        "user_id": "194840130",
        "screen_name": "drwanazizah",
        "posted_time": 1702819642000
    },
    {
        "user_id": "194840130",
        "screen_name": "drwanazizah",
        "posted_time": 1702852016000
    },
    {
        "user_id": "104065053",
        "screen_name": "tokmatn9",
        "posted_time": 1702852062000
    },
    {
        "user_id": "123757624",
        "screen_name": "MOFmalaysia",
        "posted_time": 1703062534000
    },
    {
        "user_id": "1710269685240041472",
        "screen_name": "jkomzontimur",
        "posted_time": 1703202918000
    },
    {
        "user_id": "1241726234553241601",
        "screen_name": "tzafrul_aziz",
        "posted_time": 1703071351000
    },
    {
        "user_id": "3302051755",
        "screen_name": "AzalinaOthmanS",
        "posted_time": 1703071109000
    },
    {
        "user_id": "1128337957289697281",
        "screen_name": "Sprinter99800",
        "posted_time": 1703202951000
    },
    {
        "user_id": "414991644",
        "screen_name": "FaktaBukanAuta",
        "posted_time": 1703202927000
    },
    {
        "user_id": "1470687522623672322",
        "screen_name": "Amb_Takahashi",
        "posted_time": 1703071174000
    },
    {
        "user_id": "106669711",
        "screen_name": "bernamadotcom",
        "posted_time": 1703559035000
    },
    {
        "user_id": "10207732",
        "screen_name": "fahmi_fadzil",
        "posted_time": 1703333999000
    },
    {
        "user_id": "1600303368823787523",
        "screen_name": "DSDrNaim",
        "posted_time": 1703559058000
    },
    {
        "user_id": "4970411",
        "screen_name": "AJEnglish",
        "posted_time": 1703559194000
    },
    {
        "user_id": "4970411",
        "screen_name": "AJEnglish",
        "posted_time": 1703559135000
    },
    {
        "user_id": "18650093",
        "screen_name": "pressfreedom",
        "posted_time": 1703633822000
    },
    {
        "user_id": "1036889980348461056",
        "screen_name": "HRHJohorII",
        "posted_time": 1704979535000
    },
    {
        "user_id": "275057058",
        "screen_name": "Media_Selangor",
        "posted_time": 1708786342000
    },
    {
        "user_id": "1616012861146533890",
        "screen_name": "MalaysiaMadani",
        "posted_time": 1708786610000
    }
]
const data2 = [
    {
        "user_id": "18714463",
        "screen_name": "mkini_bm",
        "posted_time": 1709910539000
    },
    {
        "user_id": "18714463",
        "screen_name": "mkini_bm",
        "posted_time": 1709910528000
    },
    {
        "user_id": "106669711",
        "screen_name": "bernamadotcom",
        "posted_time": 1709910512000
    },
    {
        "user_id": "999485134473609216",
        "screen_name": "KroniRakyat",
        "posted_time": 1709910504000
    },
    {
        "user_id": "497665754",
        "screen_name": "501Awani",
        "posted_time": 1709910491000
    },
    {
        "user_id": "1600303368823787523",
        "screen_name": "DSDrNaim",
        "posted_time": 1709910485000
    },
    {
        "user_id": "1616012861146533890",
        "screen_name": "MalaysiaMadani",
        "posted_time": 1709910481000
    },
    {
        "user_id": "1241726234553241601",
        "screen_name": "tzafrul_aziz",
        "posted_time": 1709910460000
    },
    {
        "user_id": "769155717194326017",
        "screen_name": "ReeNGaston",
        "posted_time": 1709910448000
    },
    {
        "user_id": "106669711",
        "screen_name": "bernamadotcom",
        "posted_time": 1709910439000
    },
    {
        "user_id": "40180523",
        "screen_name": "changlihkang",
        "posted_time": 1709910428000
    },
    {
        "user_id": "136972965",
        "screen_name": "AmenoWorld",
        "posted_time": 1709910418000
    },
    {
        "user_id": "18714463",
        "screen_name": "mkini_bm",
        "posted_time": 1709910390000
    },
    {
        "user_id": "497665754",
        "screen_name": "501Awani",
        "posted_time": 1709910360000
    },
    {
        "user_id": "1241726234553241601",
        "screen_name": "tzafrul_aziz",
        "posted_time": 1709885700000
    },
    {
        "user_id": "1616012861146533890",
        "screen_name": "MalaysiaMadani",
        "posted_time": 1708786610000
    },
    {
        "user_id": "275057058",
        "screen_name": "Media_Selangor",
        "posted_time": 1708786342000
    },
    {
        "user_id": "1036889980348461056",
        "screen_name": "HRHJohorII",
        "posted_time": 1704979535000
    },
    {
        "user_id": "18650093",
        "screen_name": "pressfreedom",
        "posted_time": 1703633822000
    },
    {
        "user_id": "4970411",
        "screen_name": "AJEnglish",
        "posted_time": 1703559194000
    },
    {
        "user_id": "4970411",
        "screen_name": "AJEnglish",
        "posted_time": 1703559135000
    },
    {
        "user_id": "1600303368823787523",
        "screen_name": "DSDrNaim",
        "posted_time": 1703559058000
    },
    {
        "user_id": "106669711",
        "screen_name": "bernamadotcom",
        "posted_time": 1703559035000
    },
    {
        "user_id": "10207732",
        "screen_name": "fahmi_fadzil",
        "posted_time": 1703333999000
    },
    {
        "user_id": "1128337957289697281",
        "screen_name": "Sprinter99800",
        "posted_time": 1703202951000
    },
    {
        "user_id": "414991644",
        "screen_name": "FaktaBukanAuta",
        "posted_time": 1703202927000
    },
    {
        "user_id": "1710269685240041472",
        "screen_name": "jkomzontimur",
        "posted_time": 1703202918000
    },
    {
        "user_id": "1241726234553241601",
        "screen_name": "tzafrul_aziz",
        "posted_time": 1703071351000
    },
    {
        "user_id": "1470687522623672322",
        "screen_name": "Amb_Takahashi",
        "posted_time": 1703071174000
    },
    {
        "user_id": "3302051755",
        "screen_name": "AzalinaOthmanS",
        "posted_time": 1703071109000
    },
    {
        "user_id": "123757624",
        "screen_name": "MOFmalaysia",
        "posted_time": 1703062534000
    },
    {
        "user_id": "104065053",
        "screen_name": "tokmatn9",
        "posted_time": 1702852062000
    },
    {
        "user_id": "194840130",
        "screen_name": "drwanazizah",
        "posted_time": 1702852016000
    },
    {
        "user_id": "194840130",
        "screen_name": "drwanazizah",
        "posted_time": 1702819642000
    },
    {
        "user_id": "115603899",
        "screen_name": "DrZahidHamidi",
        "posted_time": 1701683368000
    },
    {
        "user_id": "151798880",
        "screen_name": "PetraJayaMP",
        "posted_time": 1701683220000
    },
    {
        "user_id": "1743486906",
        "screen_name": "ZambryOfficial",
        "posted_time": 1701682175000
    },
    {
        "user_id": "438419104",
        "screen_name": "kamilmunim",
        "posted_time": 1701619104000
    }
]
const dateTable1 = data2DateFormat(data1);
console.log(dateTable1);
const dateTable2 = data2DateFormat(data2);
console.log(dateTable2);