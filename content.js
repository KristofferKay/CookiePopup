const selectors = [
    'button[aria-label="Accept cookies"]',
    'button[class*="accept"]',
    'button[data-accept="true"]',
    'button[id*="accept"]',
    'button[name*="accept"]',
    'button[value*="accept"]',
    'button[title*="accept"]',
    'div[role="button"]',
    '#CybotCookiebotDialogBodyButtonAccept',
    '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    '.cb-enable',
    '.cb-accept',
    '#cookieConsentAccept', 
    '.cookie-consent-accept', 
    '.cc-btn.cc-allow',  
    '#onetrust-accept-btn-handler', 
    '.onetrust-close-btn-handler', 
    '.optanon-allow-all',  
    '.accept-cookies-button',
    '#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button.css-1s6cl2e'
];

function clickAcceptButton(){
    for(let selector of selectors) {
        let button = document.querySelector(selector);
        if(button){
            button.click();
            console.log("Cookie accepted");
            return;
        } else errorMsg()
    }
}
function errorMsg(){
    console.log("No accept button found")
}

window.addEventListener("load", clickAcceptButton);