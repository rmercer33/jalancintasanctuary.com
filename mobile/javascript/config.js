	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="Flip";bookConfig.buttonsSortXML="<buttonLists/>";bookConfig.pageTextOnNav="False";bookConfig.logoTarget="Blank";bookConfig.homeButtonVisible="Show";bookConfig.btnHomeURL="http://www.flip-book-online.com/";bookConfig.btnHomeURLTarget="Blank";bookConfig.aboutButtonVisible="Hide";bookConfig.fullButtonVisible="Show";bookConfig.tryFullScreenInteractive="No";bookConfig.helpButtonVisible="Hide";bookConfig.helpWidth="400";bookConfig.helpHeight="450";bookConfig.showHelpContentAtFirst="Hide";bookConfig.enablePrint="Yes";bookConfig.printCurrentPageAsDefault="No";bookConfig.enableFlipSound="Enable";bookConfig.bacgroundSoundLoop="-1";bookConfig.bgSoundVol="-1";bookConfig.flipSoundVol="-1";bookConfig.enableZoomIn="Enable";bookConfig.minZoomLevel="0.5";bookConfig.maxZoomLevel="2";bookConfig.defaultZoomLevel="1.2";bookConfig.isAlwaysDefaultScale="No";bookConfig.isZoomerDefaultFollow="Yes";bookConfig.searchButtonVisible="Show";bookConfig.searchHightlightColor="#BE2DD2";bookConfig.searchMinialLen="2";bookConfig.isLogicAnd="No";bookConfig.ClearAfterClose="Yes";bookConfig.isShowUpperSearchField="Show";bookConfig.shareWithEmailButtonVisible="Show";bookConfig.btnShareWithEmailSubject="My FlipBook Online";bookConfig.btnShareWithEmailBody="You can watch my FlipBook Online e-brochure at {link}";bookConfig.socialShareButtonVisible="Show";bookConfig.isInsertFrameLinkEnable="Show";bookConfig.enableAutoPlay="Yes";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.autoPlayAutoStart="No";bookConfig.enableThumbnail="Enable";bookConfig.languageSetting="English";bookConfig.langaugeChangeable="No";bookConfig.drawAnnotationsButtonVisible="Disable";bookConfig.enableDownload="Yes";bookConfig.downloadURL="files/download/Flipbook_opt.pdf";bookConfig.selectionTextVisible="Enable";bookConfig.enableCropButton="Enable";bookConfig.enablePageBack="Hide";bookConfig.enablePageForward="Hide";bookConfig.isToolBarPositionOnTop="False";bookConfig.UIBtnIconColor="#ffffff";bookConfig.iconSwfResource="../files/mobile-ext/iconSwfResource.swf";bookConfig.isBigButtonEnable="Yes";bookConfig.bookmarkButtonVisible="Hide";bookConfig.TipsVisible="Show";bookConfig.toolBarTipsColor="#FFFFFF";bookConfig.TipsFontSize="12";bookConfig.enableDisplayModeButton="Show";bookConfig.defaultBookStatus="Flip";bookConfig.singleDoubleTogglable="Enable";bookConfig.isPageBrowserEnable="Yes";bookConfig.isVerticalBrowserEnable="Yes";bookConfig.isVerticalBrowseAsDefault="Yes";bookConfig.isPageBrowserDoubleEnable="Enable";bookConfig.isPageBrowserDoublePageAsDefault="Yes";bookConfig.thicknessWidthType="None";bookConfig.thicknessColor="#ffffff";bookConfig.backgroundAlpha="1";bookConfig.moveFlipBookToCenter="Yes";bookConfig.UIBtnFontColor="#ffffff";bookConfig.UIBtnFont="Tahoma";bookConfig.UIWinFontColor="#ffffff";bookConfig.UIWinFontFont="Tahoma";bookConfig.BookmarkFontColor="#ffffff";bookConfig.BookmarkFontFont="Tahoma";bookConfig.SearchItemFontColor="#000000";bookConfig.SearchItemFontFont="Tahoma";bookConfig.leftRightPnlShowOption="None";bookConfig.hotSpotWidthType="Normal";bookConfig.flipBookHelpFlipEnable="True";bookConfig.enableMouseDownToFlip="True";bookConfig.showMouseTraceAtFirstPage="True";bookConfig.tmplPreloader="Default";bookConfig.restorePageVisible="No";bookConfig.flashMenuSetting="Default";bookConfig.bgBeginColor="#BCCDD8";bookConfig.bgEndColor="#BCCDD8";bookConfig.bgMRotation="90";bookConfig.mainbgImgUrl="../files/mobile-ext/mainbgImgUrl.jpg";bookConfig.mainbgImgPosition="Scale to fit";bookConfig.innerMainbgImgPosition="Scale to fit";bookConfig.mainColor="#334962";bookConfig.panelBorderColor="#FFFFFF";bookConfig.pageBackgroundColor="#ffffff";bookConfig.pageWidth="2693";bookConfig.pageHeight="2100";bookConfig.leftPageShadowWidth="10";bookConfig.rightPageShadowWidth="10";bookConfig.pageShadowAlpha="1";bookConfig.coverPageShowShadow="Show";bookConfig.isHardCover="No";bookConfig.coverBorderWidth="8";bookConfig.coverBorderColor="#572F0D";bookConfig.showOutterCoverBoarder="Yes";bookConfig.hardCoverBorderRounded="8";bookConfig.hardCoverSpinShow="Show";bookConfig.enableFastFlip="Enable";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideBookFrameBar="No";bookConfig.frameBarColor="#eeeeee";bookConfig.isRightToLeft="No";bookConfig.isTheBookOpen="false";bookConfig.pageFlippingTime="0.6";bookConfig.mouseWheelTurnPage="Yes";bookConfig.enableClickBackgroundToTurn="Disable";bookConfig.UIBtnPageIndexFontColor="#000000";bookConfig.userSmallMode="No";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LargeLogoPosition="top-left";bookConfig.isHideTabelOfContentNodes="No";bookConfig.isTableSearchEnable="Yes";bookConfig.panelPosition="Left";bookConfig.horizotalMargin="60";bookConfig.upperMargin="10";bookConfig.securitySetting="No Security";bookConfig.passwordTips="Please contact the <a href=\'mailto:author@sample.com\'><u>author</u></a> to access the web";bookConfig.linkOverColor="#800080";bookConfig.linkOverColorAlpha="0.2";bookConfig.linkOpenedWindow="Blank";bookConfig.linkEnableWhenZoom="Enable";bookConfig.googleAnalyticsID="UA-3062643-15";bookConfig.MidBgColor="#346929";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=32;bookConfig.largePageWidth=900;bookConfig.largePageHeight=702;;bookConfig.securityType="1";bookConfig.bookTitle="Flipbook_opt";bookConfig.bookmarkCR="e483f1104d68403320fbc27648ccdc4b1fb57baa";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.124299","y":"0.397837","width":"0.689720","height":"0.021635"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"4"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.120561","y":"0.423077","width":"0.696262","height":"0.024038"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"6"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.122430","y":"0.450721","width":"0.693458","height":"0.025240"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"8"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.120561","y":"0.475962","width":"0.692523","height":"0.032452"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"10"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.121495","y":"0.504808","width":"0.695327","height":"0.028846"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"12"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.125234","y":"0.536058","width":"0.691589","height":"0.026442"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"14"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.121495","y":"0.561298","width":"0.700000","height":"0.028846"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"15"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.122430","y":"0.588942","width":"0.691589","height":"0.025240"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"16"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.122430","y":"0.618990","width":"0.697196","height":"0.031250"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"17"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.128037","y":"0.395181","width":"0.687850","height":"0.028916"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"18"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.125234","y":"0.426506","width":"0.694392","height":"0.020482"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"19"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.130841","y":"0.453012","width":"0.689720","height":"0.024096"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"20"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.128037","y":"0.481928","width":"0.687850","height":"0.021687"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"22"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.127103","y":"0.504819","width":"0.687850","height":"0.031325"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"24"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.128972","y":"0.536145","width":"0.685981","height":"0.020482"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"26"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.128037","y":"0.560241","width":"0.690654","height":"0.031325"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"28"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.127103","y":"0.596386","width":"0.692523","height":"0.020482"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"30"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.671963","y":"0.875000","width":"0.257009","height":"0.021635"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.688785","y":"0.848558","width":"0.232710","height":"0.026442"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.jalancintasanctuary.com"}}],[],[]]}; bookConfig.isFlipPdf=true;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
