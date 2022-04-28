[
    {
        "Id": 25106,
        "IdSubject": "HH",
        "Text": "Có mấy loại Service? ngn",
        "Marks": 1,
        "AnswerId": 104119,
        "Answers": [
            { "Id": 104118, "Text": "3" },
            { "Id": 104119, "Text": "4" },
            { "Id": 104120, "Text": "1" },
            { "Id": 104121, "Text": "2" }
        ]
    },
    {
        "Id": 25107, "Text": "Trong IntentService, phương thức onHandlerIntent sẽ được tự động gọi trong phương thức nào?",
        "Marks": 1,
        "AnswerId": 104124,
        "Answers": [{
            "Id": 104122,
            "Text": "onServiceConnected()"
        },
        { "Id": 104123, "Text": "onServiceDisConnected()" },
        { "Id": 104124, "Text": "onStartCommand()" },
        { "Id": 104125, "Text": "onBind()" }]
    },
    {
        "Id": 25108, "Text": "Khi nào phương thức ServiceConnection.onServiceConnected được gọi?",
        "Marks": 1,
        "AnswerId": 104126,
        "Answers":
            [{ "Id": 104126, "Text": "Sau khi một thành phần gọi Context.startService()" },
            { "Id": 104127, "Text": "Sau khi một thành phần gọi Context.bindService()" },
            { "Id": 104128, "Text": "Sau khi BroadcastReceiver nhận một Intent được gửi bởi Service" },
            { "Id": 104129, "Text": "Khi một Service gọi Context.startActivity()" }
            ]
    },
    {
        "Id": 25109,
        "Text": "Phương thức Service.stopSelf(int startId) có tham số kiểu int. Tham số này dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 104132,
        "Answers": [{
            "Id": 104130,
            "Text": "Nếu startId khác 0, Service sẽ bị hủy một cách vô điều kiện"
        },
        {
            "Id": 104131, "Text": "Tham số miêu tả số miliseconds bị trì hoãn trước khi Service bị hủy"
        },
        {
            "Id": 104132, "Text": "Là start identifier gần nhất nhận được bởi lời gọi onStart(Intent, int)"
        }, {
            "Id": 104133, "Text": "Được sử dụng để dừng Service nếu Service đang chạy trong process id với process id bằng giá trị startid"
        }
        ]
    },
    {
        "Id": 25110,
        "Text": "Câu nào là đúng khi đề cập đến Service?",
        "Marks": 1,
        "AnswerId": 104137,
        "Answers":
            [
                { "Id": 104134, "Text": "Các ứng dụng khác nhau không thể truy cập đến các Service của chính nó" },
                { "Id": 104135, "Text": "Tất cả phương án đều đúng" },
                { "Id": 104136, "Text": "Lớp Service luôn luôn được truy cập bởi tất cả ứng dụng Android khác cài trên thiết bị" },
                { "Id": 104137, "Text": "Service có thể chạy nền vô hạn kể cả khi thành phần khởi tạo Service đã bị hủy" }
            ]
    }, {
        "Id": 25111,
        "Text": "Trong IntentService, onBind mặc định trả lại giá trị nào?",
        "Marks": 1,
        "AnswerId": 104139,
        "Answers": [{ "Id": 104138, "Text": "-1" },
        { "Id": 104139, "Text": "null" },
        { "Id": 104140, "Text": "0" },
        { "Id": 104141, "Text": "\"\"" }]
    },
    {
        "Id": 25112,
        "Text": "Phương thức stopSelf dùng để làm gì?",
        "Marks": 1,
        "AnswerId": 104145,
        "Answers":
            [{ "Id": 104142, "Text": "Dừng thông báo notification tới người dùng" },
            { "Id": 104143, "Text": "Dừng chương trình" },
            { "Id": 104144, "Text": "Dừng kết nối Service với Sqlite" },
            { "Id": 104145, "Text": "Dừng Service" }
            ]
    },
    {
        "Id": 25113,
        "Text": "Phương thức onStartCommand được gọi khi nào?",
        "Marks": 1,
        "AnswerId": 104149,
        "Answers":
            [{ "Id": 104146, "Text": "Khi phương thức bindService được gọi" },
            { "Id": 104147, "Text": "Khi phương thức stopSelf được gọi" },
            { "Id": 104148, "Text": "Khi phương thức onBind được gọi" },
            { "Id": 104149, "Text": "Khi phương thức startService được gọi" }
            ]
    },
    {
        "Id": 25114,
        "Text": "Bạn nên giải phóng tài nguyên mà Service sử dụng trong phương thức nào?",
        "Marks": 1,
        "AnswerId": 104152,
        "Answers": [{ "Id": 104150, "Text": "onPause" },
        { "Id": 104151, "Text": "pauseService" },
        { "Id": 104152, "Text": "onDestroy" },
        { "Id": 104153, "Text": "startService" }
        ]
    },
    {
        "Id": 25115,
        "Text": "Để hủy Service dùng phương thức nào?",
        "Marks": 1,
        "AnswerId": 104155,
        "Answers":
            [{ "Id": 104154, "Text": "PauseService" },
            { "Id": 104155, "Text": "StopService" },
            { "Id": 104156, "Text": "PauseServices" },
            { "Id": 104157, "Text": "StopServices" }
            ]
    },
    {
        "Id": 25116,
        "Text": "Làm thế nào để disable một Broadcast Receiver khi nó đã được đăng ký trong AndroidManifest.xml?",
        "Marks": 1,
        "AnswerId": 104161,
        "Answers":
            [
                { "Id": 104158, "Text": "Sử dụng lớp PackageReceiverManager" },
                { "Id": 104159, "Text": "Sử dụng lớp BroadcastReceiver" },
                { "Id": 104160, "Text": "Sử dụng lớp BroadcastReceiverManger" },
                { "Id": 104161, "Text": "Sử dụng lớp PackageManager" }
            ]
    }, {
        "Id": 25117,
        "Text": "Có mấy cách phát, nhận broadcast receiver?",
        "Marks": 1,
        "AnswerId": 104163,
        "Answers":
            [{ "Id": 104162, "Text": "1" },
            { "Id": 104163, "Text": "2" },
            { "Id": 104164, "Text": "4" },
            { "Id": 104165, "Text": "3" }
            ]
    }, {
        "Id": 25118,
        "Text": "Khi sử dụng Intent.ACTION_BOOT_COMPLETED, hệ thống sẽ broadcast mấy lần?",
        "Marks": 1,
        "AnswerId": 104167,
        "Answers":
            [{ "Id": 104166, "Text": "4" },
            { "Id": 104167, "Text": "1" },
            { "Id": 104168, "Text": "3" },
            { "Id": 104169, "Text": "2" }
            ]
    }, {
        "Id": 25119,
        "Text": "Vòng đời của Broadcast Receiver bao gồm mấy phương thức?",
        "Marks": 1,
        "AnswerId": 104170,
        "Answers":
            [{ "Id": 104170, "Text": "1" },
            { "Id": 104171, "Text": "2" },
            { "Id": 104172, "Text": "4" },
            { "Id": 104173, "Text": "3" }
            ]
    }, {
        "Id": 25120,
        "Text": "Lệnh sau dùng để làm gì?                                                                                   \u003creceiver             android:name=\".MyCallReceiver\"             android:exported=\"false\" \u003e  \u003c/receiver\u003e", "Marks": 1, "AnswerId": 104177, "Answers": [{ "Id": 104174, "Text": "Disable receiver MyCallReceiver" }, { "Id": 104175, "Text": "Khai báo MyCallReceiver là broadcast hệ thống" }, { "Id": 104176, "Text": "Cho phép ứng dụng Calendar của hệ thống gửi broadcast tới receiver MyCallReceiver" }, { "Id": 104177, "Text": "Cấm ứng dụng khác gửi broadcast tới receiver MyCallReceiver" }]
    }
]