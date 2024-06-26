oS.Init(
    {
        PName: [
            oPeashooter,
            oSunFlower,
            oCherryBomb,
            oWallNut,
            oPotatoMine,
            oSnowPea,
            oChomper,
            oRepeater,
            oPuffShroom,
            oSunShroom,
        ],
        ZName: [
            oZombie,
            oZombie2,
            oZombie3,
            oConeheadZombie,
            oNewspaperZombie,
            oBucketheadZombie,
        ],
        PicArr: (function () {
            var a = oFumeShroom.prototype,
                b = a.PicArr;
            return [
                "images/interface/background2.jpg",
                "images/interface/Tombstones.png",
                "images/interface/Tombstone_mounds.png",
                b[a.CardGif],
                b[a.NormalGif],
            ];
        })(),
        backgroundImage: "images/interface/background2.jpg",
        CanSelectCard: 1,
        DKind: 0,
        SunNum: 50,
        LevelName: "Level 2-2",
        LvlEName: 12,
        LargeWaveFlag: { 10: $("imgFlag3"), 20: $("imgFlag1") },
        Monitor: { f: AppearTombstones, ar: [7, 9, 4] },
        UserDefinedFlagFunc: function (a) {
            oP.FlagNum == oP.FlagZombies &&
                oP.SetTimeoutTomZombie([
                    oZombie,
                    oConeheadZombie,
                    oBucketheadZombie,
                ]);
        },
        StartGameMusic: "Ultimate battle",
    },
    {
        AZ: [
            [oZombie, 2, 1],
            [oZombie2, 2, 1],
            [oZombie3, 2, 1],
            [oConeheadZombie, 2, 1],
            [oNewspaperZombie, 1, 1],
            [oBucketheadZombie, 1, 1],
        ],
        FlagNum: 20,
        FlagToSumNum: {
            a1: [3, 5, 9, 10, 13, 15, 19],
            a2: [1, 2, 3, 10, 4, 5, 6, 20],
        },
        FlagToMonitor: { 9: [ShowLargeWave, 0], 19: [ShowFinalWave, 0] },
        FlagToEnd: function () {
            NewImg(
                "imgSF",
                "images/Card/Plants/FumeShroom.png",
                "left:587px;top:270px;clip:rect(auto,auto,60px,auto)",
                EDAll,
                {
                    onclick: function () {
                        SelectModal(13);
                    },
                },
            );
            NewImg(
                "PointerUD",
                "images/interface/PointerDown.gif",
                "top:235px;left:596px",
                EDAll,
            );
        },
    },
);
