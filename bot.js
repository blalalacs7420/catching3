const Discord = require("discord.js");
const client = new Discord.Client();

var moment = require('moment');

let k = 0;
let wrongfile = "";

var Legends = ["Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew", "Raikou", "Entei", "Suicune", "Lugia", "Ho-Oh", "Celebi", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Cobalion", "Terrakion", "Virizon", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion", "Type: Null", "Silvally", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Necrozma", "Magearna", "Marshadow", "Zeraora"];

var encoded = ["sfZclxCvxpux", "bOtUtReUszUG", "nWNCQKNcQzaQ", "PxDRmsiYkSJn", "TQBIgDKjtyli", "BiNcgxsdiSsd", "YlZGScgHthXi", "PRZwwzRVywqG", "lMpsfKkPKzjJ", "AxBUogMdjAZi", "jKERMHpTXEhY", "qpDLLtjTvPff", "qWSZOZsSrzEC", "FySzgiQIuLjn", "BFAgAPVGiUNe", "efqSYrdEmwLX", "VOVQtgsxOcYS", "LydleTCHkCMf", "kXMDndQfuxeO", "EhLtTEiQZeLR", "JlNqbHLNWMsD", "zOeaIMHDOQFh", "aaTkoMiwyuyd", "CrdroxSnnBiR", "EnGVvUpPvFla", "GsvdvAYZXbva", "HvnnPERsgDTT", "tjELgMWWrKfl", "uuFIVsYOyWHR", "rsuNgvuipZDU", "qCwcusYpuFJe", "ZFIuOUujfuQj", "avYFqNTBnIHe", "GAbjGBkVsBrE", "PrBaQxxEHHYG", "ZmcEJnlykLUH", "LuMnrrdafnND", "sFmgyRqsjVuQ", "ffWxallwyFBV", "ZttErxcVSuYn", "YqsguuqVYYgo", "NuzECanaLtgU", "LkRNXHcvNHOy", "KBerDRjEFdqP", "NzIvnDDnnrwp", "VslAzbmfiGka", "IlCsWfQvTxQt", "BlaNscVQmdsB", "ZbRutppzJVDy", "NcmhoWYTVGlP", "HDpOOmcotMdX", "RobaRhRkyQsN", "WUpoAzcljPfd", "rYLBdfpiGXUe", "rcuajEwRgWYN", "FaUvUHeiIgnk", "kvvNXoiEnsMl", "WFGrSuKaWsIt", "HeDbJANzVJVE", "GaVDqNqvEpWH", "WuVdgBkRUBay", "UkMetCLdIubk", "kVhVHnuRGyXx", "VXVqefLDHlnd", "VmHCbsZZRSMh", "ZlDGZeoEjkjJ", "CTLRSHRzIfkV", "fJbRbnvwjgxZ", "KhJGPjHFnsWp", "AFUcXpeZASIM", "XDYwjwrbnXlv", "zOjJsViIODGs", "VCZqxAewjfLK", "taCzQrtDLrMa", "SVjAlXlLCohO", "luBdbdhDFjvy", "pTASDmbLghZJ", "FCglDRdrlWak", "EHmnRqiIjuWf", "MWMYNAvtQAus", "jQotFhPUkdVO", "muSiHnbQbApR", "mvNPZDQLsYgm", "eToDDPBKGkfb", "KrraDPnZYQwo", "fbPXyMmSDxwm", "wsGWhgUYxEZv", "koFpkoHovhAK", "gxeRmFjwzOTy", "jARjOLynwrAn", "WdObcNIecspi", "FTddeIjIvRTi", "hpvCLsjTQZdJ", "dVGlPeBZiVWQ", "acJKWVvSEiEW", "COXfKKEXsHSW", "KYjKhuJhCOaK", "eSvCXCzeiyLu", "qYhpnSpwSPpY", "dSHJiZEysSvA", "VFBuaaZyFWKY", "RDyyLjUdNKIU", "khkUsMdWQXYv", "QUfvewqzeYTl", "dyZdQBBLKMwF", "DTRxqStiSeGN", "KvFMZEikeYAJ", "axcAYHGaGNHz", "xJpSRFAWWHlq", "UgsCHclBNBKC", "RGSWNApuPbyk", "bURnoWvynjLB", "bWWexYtKUQBp", "HyxgpotrAEfj", "MSubyirIDpIV", "rDrDkeLPevRT", "MyHGZjOBZJBd", "WVDoPnEjZEsj", "gFYklGltAuID", "qFkTXVfmlOSQ", "aNWqREMerBRU", "DCleWNkUTzHJ", "EczrYVOycaxX", "fqBeDzsqqmHX", "giGnMcXVwvLB", "ZWhHOgNNExnP", "bovJWRsVLaJB", "NJhFesObUSNO", "nofAwbKIscwv", "tAPvHcWGRMYd", "XfuLKccXLrOI", "YXMjmtbVcmBz", "rBzaKCSiotIE", "rnjjaCzNDTVh", "PzJhuXvooAxu", "WwEkVykHXvni", "dPLXEaJFuclW", "lxmkgMEBZPFL", "HTUFeYOkaxJO", "aShFXOORTrZd", "NTrtWvGXDsJD", "SMduSvzpVtYf", "shlrBzJyKXCf", "tABILovbRKFj", "jrtwAZnqbchL", "eZkYQHqyjWHF", "roMQvSFJuVGc", "OkCVEEokFKYQ", "LFMMpZjJCOBK", "cZwtyzSpoTGK", "GOvTOLWUXLyi", "AmYoFsFzIJfr", "uLQOSIkXlunA", "DAjVfFqBKNmg", "YfPUNZlwJJWB", "rfHqWIIeZEYz", "KMYEZPhOYZvh", "PDIBLJPQoeDr", "FsFAieGYpOca", "BVXqceVAVJqj", "EwSLQsoXxKSO", "sSfrBiUjobPT", "iGizhkYeIMpr", "OaNXjBvgYPta", "iYlvNZsXlxuh", "TkBDzQGQnIkR", "mSgXSBbAfmDU", "yAAUrMVkyVUp", "aOSIjDaNKGzT", "dEpXGzcMmjJB", "kWRhbBzWlYyB", "lpurzLvSbDCl", "PhwYfrgtugaI", "EJJHYWVonMDQ", "IxhhAMIBnheM", "zWInJzsHMeGp", "kBXzCVlduJFB", "DmCPuShbwPcR", "jUSElXNriroC", "IPtTQpeKgDoe", "iQfmZgJnjlFU", "cHUSNdJBdfPU", "VJWNPTvbKCqp", "kxGfEAYjpqSg", "TfMVjovMHHQL", "GcZjIiiuOwpv", "yGTumZBLwzDj", "NSEOkSdZoniV", "vCTXGWCoDSon", "YQsnepxJeWmz", "zkvhFifSibQT", "bNukTovkjciX", "KmKOXRWLgBNW", "EEgXvPdDiRJs", "eQdckdyppVFU", "rhBoRNRwCIno", "VHqyKhNEQFty", "cqChxInkgPpc", "vQiDHgoIPztq", "RAPDxSKtCosw", "vNoGwozwexYE", "VJDeyrRcHBYn", "bhoJpnKwpmqA", "uqepPVrfNJEV", "wjxsqYkRSerp", "ItRqjHdZrCgL", "LQfPkOvtaWoE", "EinfyKqTjYEv", "XiNIAPpYSrOJ", "fDlyCExtLNjP", "yPFEAoRIvmXH", "gdicGFtIPuVc", "UVuhZkcCKiCs", "scgHVMDiUzRF", "MNmOnmwdgwHL", "wrASjrnqujsV", "jmrvrTpgaSYm", "xOoTSQvHuiog", "lGuXZHSErsAT", "UBHkQbaEHxcr", "yTvvboHMovsr", "aBmbgJcWpvma", "ICeoTXnCafpR", "elwMwwVVSeRQ", "nQykgyTVqZAg", "QSimmhfhVJhZ", "cwrWxupwAxUn", "GnudRuicTKYe", "bPeJbHKrWVxV", "lJNeJRsmGAUu", "zoACyRdTdPbu", "xAOkivmMmmWD", "ohXNPnwXjbJn", "lyPsoQZeFpVw", "fxSPexAjfZhD", "rnStQOjLLTFG", "ELJfvZdpDPHU", "SNhiPKCWzYnR", "CvukmzMJfDHN", "FOYHZiQwQTbx", "sucbrLozJGcr", "KRSAMJTKhehv", "EZuvTLLhEpDT", "VgFYcpQTuGcL", "uDGccLGDwfAr", "xtgaPWNpSUXs", "TXtVaedQtlvG", "pYtRuoaooPVQ", "qYyBjmtLqNJb", "NKcRJRyzXtCs", "kgXSBkJJPKDr", "qqjsJRUDKWea", "AFQPUBqjocyb", "xZxLDXaQUfdA", "UhqKsMeBzWfj", "mIFbnKpYuYOJ", "slcbzSnlXzKt", "QJPYcZBsHGvl", "hTzEJuDiWRQg", "fwAzviVbzXKM", "kTYWmUdeFRpd", "aGkYoZYBvTKT", "GiPhtmLUdqrD", "ynwWzxqpPWNe", "PJzmuUqnlLUT", "sozSyervrcIe", "kRAlELpvewiU", "gnCBZRaWTyoT", "UlbGZRdBBHpl", "kAMmsmFYkMta", "orVoALmrhybs", "GqhKJYKDUMaV", "YizlMOObypLb", "TBfFFbyVsnKH", "WoTxRcPYDzTb", "vmZesLgaMPeH", "xMAGXUZzynbj", "OCPJFttcPmIW", "QkKfCwyETgpO", "oWpMqTWbBaTD", "lsVjJRiJHVik", "dxupvAnlJtgL", "lPpUOXTWKHnk", "LJLCzRZEyHBi", "xYRmetsyOjdD", "NtliWtwefXRe", "RiEhtYsmFXLh", "gREQyzPwxAqm", "WKoWMCdaWknw", "SurHthAwRRjh", "OkmtrJApxpHa", "ZtnKqZcijECb", "LikoQhfaXkgx", "PGOLOLBtJADX", "ANskhjNfXGfp", "UcPkvjKliEVt", "aYaVdZRqrdXE", "CduFaVlKUYmx", "RhGDXPtUxapR", "WXuqtTLgPACg", "qhqBLKvjzluc", "mAwhJEbFjPny", "vLJQzCWkgWgm", "CazxuqhPICFf", "dtBUVQHJaGZh", "QQBEAPCepFee", "KksWjCpkBvaI", "GRNoJoNdRYPh", "OeuEgmCsmxXK", "xVYNwDIbeCPs", "DPxUBggYRhYh", "iPGRPiuyDjJe", "shiojZojxKui", "FcBeCkcVtREe", "tItWgnxqkgNB", "mhWzOluPDFZo", "GXiMLtkORiJw", "NpbOBMgSNQLU", "bjzTWQTBCvqW", "QeURFDZdkvod", "ChEBouSJcGKR", "pXwEixtBLxHv", "RzAKXPermcrz", "nBmvGOhoAvPW", "bKyPAkGUrEnc", "yESNonTkSBrI", "mJvcyHoyNJUx", "VIjBcTyyRsvt", "aauJoEZWyocu", "wRxUcdSAFfJP", "witWqKxOrxBj", "ekJVhVPQXErn", "CsaaadfuOlUD", "WdKLfSUrpdTH", "dusgRtClODVo", "SwWtDuHWAsKo", "xCNfxeaPowXI", "pxkgPpBcGgqR", "wGSJlzToDcNK", "RHeoLCgEITXc", "sSchDWVBILou", "ELJnsbnZdMUw", "MDvyliZFpBxb", "egtwhHhcfGPq", "qNxAKBEhfABX", "auXJWxspXgbd", "SPRGMYZWipnO", "avdakSrsTxVI", "WtqiRgYRKmGz", "HqoxSFmlYRvH", "vYKIyHpZneyw", "yJuYpxtjiiIR", "ghTrajNacLci", "pwpsiiIxZADq", "ymYLllLUWFAD", "YtxcrgLHQYEV", "IJrQcajlYvSn", "DmfNJkWgFcIu", "GaHwiNbMfaxB", "dOfEBTaqRoGT", "SYhtmmqZvYRS", "VydAdXXrkqSb", "MvBGDedoREJb", "FrIxlmhczXAR", "UOIGUXzeDDML", "hcwSyrdeJiJm", "QtvycdGAZzWP", "qSceAhASnoQP", "gRosuSoCOsvq", "pIGiTBEEwuyx", "SdzypcFmJXwC", "DLkeKSgmxtBN", "jpTSifixFERC", "NRCDjOOthifI", "IqsgZWtfDaKD", "nXuvorfpKlYM", "BQlppBYsqWJX", "PegdgOrDJauX", "FLBrevJUKtwb", "cUlaoIUTYzze", "cHMJOYWOrpfI", "qwZjNWcRpYeL", "tsHyEzrFRvvf", "lUUbmdNYWQGe", "mtKGpuxmLsNU", "KFBEarCORUNx", "MNHojCtaDxPs", "dUeEyYZuHyLK", "jmhDOQGyihcJ", "dIZbHsOngTNx", "biMNJRgspabH", "kyyUxCBljofV", "bDFdBMxoLfJT", "ZpSXfNVHTvqi", "rwStJUbDnyjP", "AkZdPqwsJIsa", "NsVJwaSDbDOv", "dXRbkVmSoBbZ", "qalwDOatIoVE", "jQkVYYoWeRxu", "QHziIzrobUtp", "pzuKBoTTvptH", "NzSSctFjWnWM", "pyIVBcIhruLU", "pthuIxnZcPKD", "xDYxtGpSAWTs", "HglmQuiQlHJp", "ynqYpoMSDYVq", "FGeKjDBUgfbQ", "DiCewrVNvWAM", "TjmQLaUqQxRM", "bjeSTBvZnegX", "ZcFVgkJaigvk", "pprvqBfPaage", "AuhRMtoJoTzW", "QsFoKiayUnGX", "YWCwiZdAPFCB", "hjPMnoKeLjnl", "eyhbCPWZlOZW", "eQTyjYeQZUJF", "lPmZxysKNuLr", "jMRszlCiLchK", "wXvicWciwztQ", "YGlGbFqlgvcK", "cCQkdtBnIOeu", "TNhTLREJTLdV", "cwwszIiNDqQG", "ySDkJHmEEjQq", "HjvyILLTVXAS", "zocaCDjPIwXf", "aZhinlRNnEuh", "HdsLIovjBFww", "horcJjxquDTy", "CFOWdBSOhoWx", "lzWIqKMmvBXQ", "PlDGccbsZjEY", "KInyfJtDonEs", "XEiTuZDtvLxV", "iwOkNHVLfgWC", "kFThzfJSxjBo", "LzPhvvoMCVZS", "HtLkEwruoXao", "EkqkCtItWQVq", "SLwUVIHRDvKP", "PGCDPsKYozzb", "LuNGCdGoyMgB", "QPtVRizQYUaO", "SVNIugrJFtLE", "BeDCaFpWZywG", "dUWsXJhTSmjN", "ZzDZEJYIardk", "GDSwCAwdkYeB", "daSuhyOcJbAJ", "GaDlVFcXQCGi", "lOrFQKhFwwzW", "dWLcGoTWkfte", "GSSIAhrGpEes", "CknXJLjIkkts", "oojPVYVttIMc", "dtbDJPGlSEcj", "YOTkAiAnsZKX", "oeRzLjJSpFhj", "hzNzFrsknTqh", "qoCYOzsreUEp", "IkXRvxHnhGmc", "gEdnejkqCiTQ", "nekrQDThHCOo", "OhvAffujbVpL", "PuUbkrMJxobv", "vHPNnLbWftdv", "eVyEviGywEOl", "aHVSvvpmauNy", "jahfUMCsIkon", "aaHxOHxNWkwQ", "MAUozmlqUaEn", "ZeeuDTnfDQLV", "tLLRbGQxzidn", "oMWpNESFjPxI", "DVTFNRGkDMBr", "tegGYtnnnXrY", "eZrtVXpOsXYD", "QsIWrEOWzdFZ", "EyrnISUymuXj", "nkPKoCOJhjCQ", "iqIDyvqbxkSK", "cHXUuofxeSJe", "zLjZxfPivZxG", "yUNhHsvuJSJd", "psVyZGhxJJYF", "OhHdWsAIonRP", "PymtoiCJkjfF", "bohDfKyJVhlQ", "CLMXnAHoJBHz", "xPrzBkGivhca", "hrIbCjYOAkvp", "dMDECiLTOrhG", "cJqvAfsTDTrT", "RAEQZUTEKUFb", "ATMugCVscpmR", "LZiezBnHjcLv", "HKCSqIFMwZPX", "GlQVInvwyEEa", "BtcctAdcYOkA", "IeWLYBzEuEUi", "MCJYYymsvDOA", "btGWxGWTANCL", "VQFGLNwRkVQq", "wvtLwcFbnfWg", "WsppRUMaBviB", "CNkhynkbPcol", "IjSOdClEhMHY", "nisEiShEHDpf", "ajvYhBrjtwDJ", "YdeagEGCKfUL", "tifGemVcKusP", "fLKtkKzogkcO", "tOZpuEarjJbQ", "iAyjDqqvIOCw", "MqIGWRDNQgzZ", "tkSIhWsdaHHW", "HvlHgGtvEUUt", "ceInTSVMdAcu", "kBxVGpizoADQ", "reLCORASYunJ", "qMohtSwyaYve", "QgpynlguBidz", "yKmAWGvWuKIb", "moZiVlEfUHqv", "JqaiwpKKKRGO", "PESvMchDZJjU", "emfWUYRCgQWo", "tYTTPCaRCdfu", "TNYdzDndNUYc", "aTXLKzQonNoM", "hjKgVTfZIpUf", "gyqdFLqtkczS", "TPmQcZwioxwC", "RZjmBYeVmGlu", "MIwWaiayHFTK", "CHQaNRTLVSqR", "TbjVDxfYoXNo", "yxMbmHuSVHSE", "spKcrBxogoco", "GodduHEzbuPY", "ZkWLQdKHKfiX", "jhhZUDVcIiOh", "sUUzeNSTgiSq", "YEqUfNAFjFgn", "FopAgSfCaiEX", "zzkpbxwhuBSM", "tgIcTCTROnnS", "oGuslSPMROqT", "PxQAkXIzcQXB", "cSKAZDTtDRKl", "sEvtkKQrHGZY", "XnUnkRqBMJmh", "wizEpkRTuQkI", "IGYVbtwJrnhL", "uQhqYepiGQPf", "YtHXuJXoZHNA", "rOtVYAGukXgm", "GynGAnvpQIXO", "ivoNvXABLTEu", "GOXjOjkPYqcX", "cyOvqlZfdpjS", "WLyZGJpjsABq", "xqSFzkWXNsku", "iVGqhQDIWHTx", "MrAKlyplSPvr", "onvtigUwSBQo", "PmlZjQzrqNwM", "MuLPFLpMXDTe", "RvTZOkrdphrs", "QRruucHLXogC", "pAueUlbgfBol", "sLdEPmNbMTDq", "zQsVcOGLRRFB", "IIcoZrjMoTff", "rXWuhpewrMXU", "StheUIDSrsSY", "ebhmIfoAvfGo", "myBDKgEYCwVy", "ipPXricPelrS", "PjvFuyFHjDIO", "wWQNSMehgWNx", "LAhngnzXLfqL", "TFSHUhtoPimK", "DQHsGzEwVGSb", "QXrdWyyiugXc", "wyqJAtUlGMun", "UVbTJnvjwMlp", "JLtUBLbdHPve", "CvKVbuShzxZQ", "ozyiRlBGDIOg", "HKckWKcYGlrY", "bogLOUpulEuc", "HSCQzNCCogLn", "ZkKyFsFzihAG", "wTbPaeZIMoNS", "LbwlToQrUiSP", "eXVcHjiVyewe", "wqpaxWrxeJEX", "aGgLKIImBewK", "uytIHAcmpuSG", "cPEmDEjIMgXu", "EJTcdXJLSaQw", "vHevpgnTsyKB", "bxxiWgddWDqy", "rcjBqpHxQaWz", "LryUimZUdBBT", "ozuSVzKEORan", "UPuxjbIcrytJ", "EDzeRNGIWyjm", "hjRjXppbodIv", "ebuvFpjEnYnu", "UnHLBtsOZqRd", "mJFUWDSIbqKm", "mBBEXrUDmVlQ", "GznESVzcmFnL", "jjtdLoEepwpB", "GFLaTWQWdDNx", "ZZKcKGmHyBzc", "rbujtayYNZiF", "wMOPGyTJHkiv", "XVaFpmKytCnJ", "VdmOwyzWUMoz", "PanhjVAiKokJ", "fnnFsnElVeOu", "bUcdyiCKAZMY", "SfekHmzrAggx", "iKrukEOQVneH", "ZlEqcjbuhSkI", "shCGEfMUjXQQ", "jHWJCSaPeqgu", "viebuDQHvjxF", "QMzWewlATzBc", "KsppXAzznpck", "mGVUFalDTQCu", "tFnkfCFfHGeI", "dhJqIQArvMEW", "BdBnEooMYXOy", "KnjGZlmuVNLD", "dAQPPuTcdnBu", "swDzioNyoHsd", "rDOWDgxkTBKN", "FYRxKEoKrDsn", "sfyQRnPhHMru", "gmypxntMuvAg", "LRzWPtwPpUGf", "WHvvWYfPoldN", "UjujnbaPdYKX", "aAAPYWMLurYC", "tTdhKBoyqDjU", "PxclWRcDTEZW", "iuCKhgLgmCGN", "MGveygvaGGPF", "EzqMReKzAzRO", "FuBNfetbqJCW", "wTUSZtuMLlts", "TQkEDdaDCkmQ", "PXWPVMjhjWmn", "VLQjvQiGWZKE", "xrBbGwhypvlU", "eBjTqrRUBxmG", "qWpNijExLtOB", "GvQTzkRuXsBg", "qGFTTOTGVVKv", "mCgddVPRKZGt", "sNPiAibpMBRx", "tuPpKoCxMkPr", "qqLOBIFuejFJ", "bLrNUiNxHCrA", "MznEgQhQfnrr", "haogrRLQCSIa", "wqGNKarUVOip", "ZLYeVbJOjkYx", "TXYSmOFIztmg", "qcihubvbEEqm", "CtxTKiGppuLA", "VTIVYjVUwnkD", "DGEeznyqYXpB", "ZMxjcueXMvBX", "ACVedMRxqEHw", "ykzmkkbFOZgV", "BKzscfBjrzvj", "UMYlLwUGvoTd", "knhJXCPwtzWG", "UDWvJOBDLEGd", "LaTtilVtiJtp", "LZinTxvblXEO", "IQTtBCTaYRQa", "jyRpAxmJRInk", "lPdGctrsoPtX", "yGnvMYYrgFuJ", "FwkAUwFegpHq", "OOxnOoznQQfw", "yCHGdyQDSCdi", "zFrxQjMTseWK", "lvLZVeprAjCA", "UlaeTRHTQKPZ", "tGYXleGrveLb", "upZpPXIpaSku", "BoJdXFlOiblM", "NUYxwVYUlxuO", "HZWSEZIgnVUv", "OSGPoxgCzRXl", "BKEvMQOtYXYL", "JxXTeHtzopch", "UTiMXWcgTEpt", "DaRFyiIcmlfN", "wTIOxnZUfVjo", "bUcHUdhrjFnl", "mvpeQuchKAxi", "fgjCfOKkFPXz", "dbnEqPhUYcMi", "XAHqDsmsnYPy", "BCkOKdujjXJL", "EtfoHCBPdbWf", "iWZbnGuUnqPQ", "ysHnagYrnyDk", "BcVcWlExuScw", "VNaBmADKjcEh", "xSOCqaKJLSxF", "ekYzJELZQvbu", "EXEKAWQmbyee", "iaaUtajhiNhB", "dPqeFFWOPIEt", "nsJdHpwHEqDQ", "xAVVQIrTbkIN", "rBbWOaNZQbzB", "TbALKcXeFmZr", "EcDqOnkvXxPg", "qCfbBHtdlkWa", "XOzFnzJYOKjn", "LDMFVAQvvXEm", "xAkKuxQLnZdU", "NhbiEEddqeXa", "AOYflYbIRwIb", "wnXcaQggJcqy", "eZezXSMnZjGE", "ooAZWoaZugtY", "YHOYhjiZurhe", "XdWWndadjbwF", "gTdJFNIbZLtD", "mQzTTypudiXg", "mPYLkhdoImZY", "iQKAWNxVakaI", "VxTNcbobMxZH", "BeCjLPBwWDnX", "AkhiaXlrTHay", "AJTIjBrvfRfN", "jcaMQyabSMIs", "dZjogskGnLUM", "HzXkZmYZmojy", "wpLihuiepvUo", "gdvwIvoQBqPU", "imtqoxSDvRIS", "WATaXESwOqrs", "IFxYVxtGAkno", "MTYeJHlfstGF", "UjwObImyGFmq", "AtNsQitULbyv", "zuOUjHUCRphh", "LFcTWvyVBRGA", "EtqjbxRBwyCC", "YVmAfMBCbOoZ", "NysCptnrEkpx", "DttOkVuiIzBZ", "enXVlOhaFAQb", "yleFRcqlnFCj", "cLXVcFRgrRvH", "RmINoasKJHQM", "IPCdYBDsYZRO", "oOzaEDrAjxvS", "XvwdPsrryoJI", "xUonTmMrMArb", "DSbkKUAWkCqS", "FigLZToHvVMx", "LuSxLbyAXWfz", "wFDDcIFIPqJk", "JBScnFzolUFG", "NYIIFDmJNISS", "qLaRGFpLFiBp", "qrzJreoYFLKo", "nQXyvWqtwaCa", "FZuKruLQPZDP", "lEPrPfHAIMLa", "XSuqyqVXTHHb", "eYbkjWOSQYGT", "EzQRANYAtxmE", "ukhkOXgNulEK", "rmKkFJEJvHIk", "jpZFhVGXfqLm", "ANvAfwmkGRaB", "qsgvDVdRNzub", "NUZGOUliZbVp", "wWVViynlNwhq", "BerOymYadVZb", "rRNgybNqrYHt", "mfRYgHJuvUUT", "pCQQZWewTILN", "qWIjKKIExWHW", "CxNLfbLtZvMP", "bmmBRtRnAKMm", "oXPJVtJJDCWO", "kkWnZrvNFUht"];

var pokemonList = ['Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
  'Blastoise',
  'Caterpie',
  'Metapod',
  'Butterfree',
  'Weedle',
  'Kakuna',
  'Beedrill',
  'Pidgey',
  'Pidgeotto',
  'Pidgeot',
  'Rattata',
  'Raticate',
  'Spearow',
  'Fearow',
  'Ekans',
  'Arbok',
  'Pikachu',
  'Raichu',
  'Sandshrew',
  'Sandslash',
  'Nidoran♀',
  'Nidorina',
  'Nidoqueen',
  'Nidoran♂',
  'Nidorino',
  'Nidoking',
  'Clefairy',
  'Clefable',
  'Vulpix',
  'Ninetales',
  'Jigglypuff',
  'Wigglytuff',
  'Zubat',
  'Golbat',
  'Oddish',
  'Gloom',
  'Vileplume',
  'Paras',
  'Parasect',
  'Venonat',
  'Venomoth',
  'Diglett',
  'Dugtrio',
  'Meowth',
  'Persian',
  'Psyduck',
  'Golduck',
  'Mankey',
  'Primeape',
  'Growlithe',
  'Arcanine',
  'Poliwag',
  'Poliwhirl',
  'Poliwrath',
  'Abra',
  'Kadabra',
  'Alakazam',
  'Machop',
  'Machoke',
  'Machamp',
  'Bellsprout',
  'Weepinbell',
  'Victreebel',
  'Tentacool',
  'Tentacruel',
  'Geodude',
  'Graveler',
  'Golem',
  'Ponyta',
  'Rapidash',
  'Slowpoke',
  'Slowbro',
  'Magnemite',
  'Magneton',
  "Farfetchd",
  'Doduo',
  'Dodrio',
  'Seel',
  'Dewgong',
  'Grimer',
  'Muk',
  'Shellder',
  'Cloyster',
  'Gastly',
  'Haunter',
  'Gengar',
  'Onix',
  'Drowzee',
  'Hypno',
  'Krabby',
  'Kingler',
  'Voltorb',
  'Electrode',
  'Exeggcute',
  'Exeggutor',
  'Cubone',
  'Marowak',
  'Hitmonlee',
  'Hitmonchan',
  'Lickitung',
  'Koffing',
  'Weezing',
  'Rhyhorn',
  'Rhydon',
  'Chansey',
  'Tangela',
  'Kangaskhan',
  'Horsea',
  'Seadra',
  'Goldeen',
  'Seaking',
  'Staryu',
  'Starmie',
  'Mr. Mime',
  'Scyther',
  'Jynx',
  'Electabuzz',
  'Magmar',
  'Pinsir',
  'Tauros',
  'Magikarp',
  'Gyarados',
  'Lapras',
  'Ditto',
  'Eevee',
  'Vaporeon',
  'Jolteon',
  'Flareon',
  'Porygon',
  'Omanyte',
  'Omastar',
  'Kabuto',
  'Kabutops',
  'Aerodactyl',
  'Snorlax',
  'Articuno',
  'Zapdos',
  'Moltres',
  'Dratini',
  'Dragonair',
  'Dragonite',
  'Mewtwo',
  'Mew',
  'Chikorita',
  'Bayleef',
  'Meganium',
  'Cyndaquil',
  'Quilava',
  'Typhlosion',
  'Totodile',
  'Croconaw',
  'Feraligatr',
  'Sentret',
  'Furret',
  'Hoothoot',
  'Noctowl',
  'Ledyba',
  'Ledian',
  'Spinarak',
  'Ariados',
  'Crobat',
  'Chinchou',
  'Lanturn',
  'Pichu',
  'Cleffa',
  'Igglybuff',
  'Togepi',
  'Togetic',
  'Natu',
  'Xatu',
  'Mareep',
  'Flaaffy',
  'Ampharos',
  'Bellossom',
  'Marill',
  'Azumarill',
  'Sudowoodo',
  'Politoed',
  'Hoppip',
  'Skiploom',
  'Jumpluff',
  'Aipom',
  'Sunkern',
  'Sunflora',
  'Yanma',
  'Wooper',
  'Quagsire',
  'Espeon',
  'Umbreon',
  'Murkrow',
  'Slowking',
  'Misdreavus',
  'Unown',
  'Wobbuffet',
  'Girafarig',
  'Pineco',
  'Forretress',
  'Dunsparce',
  'Gligar',
  'Steelix',
  'Snubbull',
  'Granbull',
  'Qwilfish',
  'Scizor',
  'Shuckle',
  'Heracross',
  'Sneasel',
  'Teddiursa',
  'Ursaring',
  'Slugma',
  'Magcargo',
  'Swinub',
  'Piloswine',
  'Corsola',
  'Remoraid',
  'Octillery',
  'Delibird',
  'Mantine',
  'Skarmory',
  'Houndour',
  'Houndoom',
  'Kingdra',
  'Phanpy',
  'Donphan',
  'Porygon2',
  'Stantler',
  'Smeargle',
  'Tyrogue',
  'Hitmontop',
  'Smoochum',
  'Elekid',
  'Magby',
  'Miltank',
  'Blissey',
  'Raikou',
  'Entei',
  'Suicune',
  'Larvitar',
  'Pupitar',
  'Tyranitar',
  'Lugia',
  'Ho-Oh',
  'Celebi',
  'Treecko',
  'Grovyle',
  'Sceptile',
  'Torchic',
  'Combusken',
  'Blaziken',
  'Mudkip',
  'Marshtomp',
  'Swampert',
  'Poochyena',
  'Mightyena',
  'Zigzagoon',
  'Linoone',
  'Wurmple',
  'Silcoon',
  'Beautifly',
  'Cascoon',
  'Dustox',
  'Lotad',
  'Lombre',
  'Ludicolo',
  'Seedot',
  'Nuzleaf',
  'Shiftry',
  'Taillow',
  'Swellow',
  'Wingull',
  'Pelipper',
  'Ralts',
  'Kirlia',
  'Gardevoir',
  'Surskit',
  'Masquerain',
  'Shroomish',
  'Breloom',
  'Slakoth',
  'Vigoroth',
  'Slaking',
  'Nincada',
  'Ninjask',
  'Shedinja',
  'Whismur',
  'Loudred',
  'Exploud',
  'Makuhita',
  'Hariyama',
  'Azurill',
  'Nosepass',
  'Skitty',
  'Delcatty',
  'Sableye',
  'Mawile',
  'Aron',
  'Lairon',
  'Aggron',
  'Meditite',
  'Medicham',
  'Electrike',
  'Manectric',
  'Plusle',
  'Minun',
  'Volbeat',
  'Illumise',
  'Roselia',
  'Gulpin',
  'Swalot',
  'Carvanha',
  'Sharpedo',
  'Wailmer',
  'Wailord',
  'Numel',
  'Camerupt',
  'Torkoal',
  'Spoink',
  'Grumpig',
  'Spinda',
  'Trapinch',
  'Vibrava',
  'Flygon',
  'Cacnea',
  'Cacturne',
  'Swablu',
  'Altaria',
  'Zangoose',
  'Seviper',
  'Lunatone',
  'Solrock',
  'Barboach',
  'Whiscash',
  'Corphish',
  'Crawdaunt',
  'Baltoy',
  'Claydol',
  'Lileep',
  'Cradily',
  'Anorith',
  'Armaldo',
  'Feebas',
  'Milotic',
  'Castform',
  'Kecleon',
  'Shuppet',
  'Banette',
  'Duskull',
  'Dusclops',
  'Tropius',
  'Chimecho',
  'Absol',
  'Wynaut',
  'Snorunt',
  'Glalie',
  'Spheal',
  'Sealeo',
  'Walrein',
  'Clamperl',
  'Huntail',
  'Gorebyss',
  'Relicanth',
  'Luvdisc',
  'Bagon',
  'Shelgon',
  'Salamence',
  'Beldum',
  'Metang',
  'Metagross',
  'Regirock',
  'Regice',
  'Registeel',
  'Latias',
  'Latios',
  'Kyogre',
  'Groudon',
  'Rayquaza',
  'Jirachi',
  'Deoxys',
  'Turtwig',
  'Grotle',
  'Torterra',
  'Chimchar',
  'Monferno',
  'Infernape',
  'Piplup',
  'Prinplup',
  'Empoleon',
  'Starly',
  'Staravia',
  'Staraptor',
  'Bidoof',
  'Bibarel',
  'Kricketot',
  'Kricketune',
  'Shinx',
  'Luxio',
  'Luxray',
  'Budew',
  'Roserade',
  'Cranidos',
  'Rampardos',
  'Shieldon',
  'Bastiodon',
  'Burmy',
  'Wormadam',
  'Mothim',
  'Combee',
  'Vespiquen',
  'Pachirisu',
  'Buizel',
  'Floatzel',
  'Cherubi',
  'Cherrim',
  'Shellos',
  'Gastrodon',
  'Ambipom',
  'Drifloon',
  'Drifblim',
  'Buneary',
  'Lopunny',
  'Mismagius',
  'Honchkrow',
  'Glameow',
  'Purugly',
  'Chingling',
  'Stunky',
  'Skuntank',
  'Bronzor',
  'Bronzong',
  'Bonsly',
  'Mime Jr.',
  'Happiny',
  'Chatot',
  'Spiritomb',
  'Gible',
  'Gabite',
  'Garchomp',
  'Munchlax',
  'Riolu',
  'Lucario',
  'Hippopotas',
  'Hippowdon',
  'Skorupi',
  'Drapion',
  'Croagunk',
  'Toxicroak',
  'Carnivine',
  'Finneon',
  'Lumineon',
  'Mantyke',
  'Snover',
  'Abomasnow',
  'Weavile',
  'Magnezone',
  'Lickilicky',
  'Rhyperior',
  'Tangrowth',
  'Electivire',
  'Magmortar',
  'Togekiss',
  'Yanmega',
  'Leafeon',
  'Glaceon',
  'Gliscor',
  'Mamoswine',
  'Porygon-Z',
  'Gallade',
  'Probopass',
  'Dusknoir',
  'Froslass',
  'Rotom',
  'Uxie',
  'Mesprit',
  'Azelf',
  'Dialga',
  'Palkia',
  'Heatran',
  'Regigigas',
  'Giratina',
  'Cresselia',
  'Phione',
  'Manaphy',
  'Darkrai',
  'Shaymin',
  'Arceus',
  'Victini',
  'Snivy',
  'Servine',
  'Serperior',
  'Tepig',
  'Pignite',
  'Emboar',
  'Oshawott',
  'Dewott',
  'Samurott',
  'Patrat',
  'Watchog',
  'Lillipup',
  'Herdier',
  'Stoutland',
  'Purrloin',
  'Liepard',
  'Pansage',
  'Simisage',
  'Pansear',
  'Simisear',
  'Panpour',
  'Simipour',
  'Munna',
  'Musharna',
  'Pidove',
  'Tranquill',
  'Unfezant',
  'Blitzle',
  'Zebstrika',
  'Roggenrola',
  'Boldore',
  'Gigalith',
  'Woobat',
  'Swoobat',
  'Drilbur',
  'Excadrill',
  'Audino',
  'Timburr',
  'Gurdurr',
  'Conkeldurr',
  'Tympole',
  'Palpitoad',
  'Seismitoad',
  'Throh',
  'Sawk',
  'Sewaddle',
  'Swadloon',
  'Leavanny',
  'Venipede',
  'Whirlipede',
  'Scolipede',
  'Cottonee',
  'Whimsicott',
  'Petilil',
  'Lilligant',
  'Basculin',
  'Sandile',
  'Krokorok',
  'Krookodile',
  'Darumaka',
  'Darmanitan',
  'Maractus',
  'Dwebble',
  'Crustle',
  'Scraggy',
  'Scrafty',
  'Sigilyph',
  'Yamask',
  'Cofagrigus',
  'Tirtouga',
  'Carracosta',
  'Archen',
  'Archeops',
  'Trubbish',
  'Garbodor',
  'Zorua',
  'Zoroark',
  'Minccino',
  'Cinccino',
  'Gothita',
  'Gothorita',
  'Gothitelle',
  'Solosis',
  'Duosion',
  'Reuniclus',
  'Ducklett',
  'Swanna',
  'Vanillite',
  'Vanillish',
  'Vanilluxe',
  'Deerling',
  'Sawsbuck',
  'Emolga',
  'Karrablast',
  'Escavalier',
  'Foongus',
  'Amoonguss',
  'Frillish',
  'Jellicent',
  'Alomomola',
  'Joltik',
  'Galvantula',
  'Ferroseed',
  'Ferrothorn',
  'Klink',
  'Klang',
  'Klinklang',
  'Tynamo',
  'Eelektrik',
  'Eelektross',
  'Elgyem',
  'Beheeyem',
  'Litwick',
  'Lampent',
  'Chandelure',
  'Axew',
  'Fraxure',
  'Haxorus',
  'Cubchoo',
  'Beartic',
  'Cryogonal',
  'Shelmet',
  'Accelgor',
  'Stunfisk',
  'Mienfoo',
  'Mienshao',
  'Druddigon',
  'Golett',
  'Golurk',
  'Pawniard',
  'Bisharp',
  'Bouffalant',
  'Rufflet',
  'Braviary',
  'Vullaby',
  'Mandibuzz',
  'Heatmor',
  'Durant',
  'Deino',
  'Zweilous',
  'Hydreigon',
  'Larvesta',
  'Volcarona',
  'Cobalion',
  'Terrakion',
  'Virizion',
  'Tornadus',
  'Thundurus',
  'Reshiram',
  'Zekrom',
  'Landorus',
  'Kyurem',
  'Keldeo',
  'Meloetta',
  'Genesect',
  'Chespin',
  'Quilladin',
  'Chesnaught',
  'Fennekin',
  'Braixen',
  'Delphox',
  'Froakie',
  'Frogadier',
  'Greninja',
  'Bunnelby',
  'Diggersby',
  'Fletchling',
  'Fletchinder',
  'Talonflame',
  'Scatterbug',
  'Spewpa',
  'Vivillon',
  'Litleo',
  'Pyroar',
  'Flabébé',
  'Floette',
  'Florges',
  'Skiddo',
  'Gogoat',
  'Pancham',
  'Pangoro',
  'Furfrou',
  'Espurr',
  'Meowstic',
  'Honedge',
  'Doublade',
  'Aegislash',
  'Spritzee',
  'Aromatisse',
  'Swirlix',
  'Slurpuff',
  'Inkay',
  'Malamar',
  'Binacle',
  'Barbaracle',
  'Skrelp',
  'Dragalge',
  'Clauncher',
  'Clawitzer',
  'Helioptile',
  'Heliolisk',
  'Tyrunt',
  'Tyrantrum',
  'Amaura',
  'Aurorus',
  'Sylveon',
  'Hawlucha',
  'Dedenne',
  'Carbink',
  'Goomy',
  'Sliggoo',
  'Goodra',
  'Klefki',
  'Phantump',
  'Trevenant',
  'Pumpkaboo',
  'Gourgeist',
  'Bergmite',
  'Avalugg',
  'Noibat',
  'Noivern',
  'Xerneas',
  'Yveltal',
  'Zygarde',
  'Diancie',
  'Hoopa',
  'Volcanion',
  'Rowlet',
  'Dartrix',
  'Decidueye',
  'Litten',
  'Torracat',
  'Incineroar',
  'Popplio',
  'Brionne',
  'Primarina',
  'Pikipek',
  'Trumbeak',
  'Toucannon',
  'Yungoos',
  'Gumshoos',
  'Grubbin',
  'Charjabug',
  'Vikavolt',
  'Crabrawler',
  'Crabominable',
  'Oricorio',
  'Cutiefly',
  'Ribombee',
  'Rockruff',
  'Lycanroc',
  'Wishiwashi',
  'Mareanie',
  'Toxapex',
  'Mudbray',
  'Mudsdale',
  'Dewpider',
  'Araquanid',
  'Fomantis',
  'Lurantis',
  'Morelull',
  'Shiinotic',
  'Salandit',
  'Salazzle',
  'Stufful',
  'Bewear',
  'Bounsweet',
  'Steenee',
  'Tsareena',
  'Comfey',
  'Oranguru',
  'Passimian',
  'Wimpod',
  'Golisopod',
  'Sandygast',
  'Palossand',
  'Pyukumuku',
  'Type: Null',
  'Silvally',
  'Minior',
  'Komala',
  'Turtonator',
  'Togedemaru',
  'Mimikyu',
  'Bruxish',
  'Drampa',
  'Dhelmise',
  'Jangmo-o',
  'Hakamo-o',
  'Kommo-o',
  'Tapu Koko',
  'Tapu Lele',
  'Tapu Bulu',
  'Tapu Fini',
  'Cosmog',
  'Cosmoem',
  'Solgaleo',
  'Lunala',
  'Nihilego',
  'Buzzwole',
  'Pheromosa',
  'Xurkitree',
  'Celesteela',
  'Kartana',
  'Guzzlord',
  'Necrozma',
  'Magearna',
  'Marshadow',
  'Poipole',
  'Naganadel',
  'Stakataka',
  'Blacephalon',
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if (msg.embeds.length > 0 && msg.channel.id === "433929844250771456") {

        let link = msg.embeds[0].image.url;
        let dotSeparator = link.split(".");
        let filenameContainer = dotSeparator[dotSeparator.length - 2];
        let slashSeparator = filenameContainer.split("/");
        let filename = slashSeparator[slashSeparator.length - 1];
        let ufilename = filename.replace(/[0-9]/g, '');
        if (ufilename.slice(0, 3) === 'px-') {
            ufilename = ufilename.slice(3);
        }

        for (var i = 0; i <= 806; i++) {
            if (ufilename === encoded[i]) {
                k = 1;
                wrongfile = encoded[i];
                break;
            }
        }

        if (k == 1) {
            var n = encoded.indexOf(wrongfile);
            msg.channel.send('p!catch ' + pokemonList[i]);
			k = 0;
          for (i = 0; i <= 68; i++) {
                if (pokemonList[n] === Legends[i]) {
                    msg.channel.send(`<@133830755192143872> You've caught a Legend! ${Legends[i]}`);
                }
            }
        }



    }

});




client.login(process.env.BOT_TOKEN);
