// const box = document.querySelector('.freebirdFormviewerViewFooterEmbeddedBackground'),
//           text = document.querySelector('.freebirdFormviewerViewNavigationPasswordWarning');

// box.style.display = 'none';

// setTimeout(() => {
//     const box = document.querySelector('.freebirdFormviewerViewFooterEmbeddedBackground'),
//           text = document.querySelector('.freebirdFormviewerViewNavigationPasswordWarning');

//     // box.style.display = 'none';
//     box.classList.add('hide');
// }, 2000);

// const box = document.getElementById('ask-form').querySelector('.freebirdFormviewerViewFooterEmbeddedBackground');

// box.classList.add('hide');



// window.addEventListener('load', () => {
    


    // function hideGo(item) {
    //     item.style.display = 'none';
    // }
    // console.log('NO!');

    // hideGo(box);
    // hideGo(text);
    // console.log('OK!');
// });

// var iframe = document.getElementById('ask-form');
// var innerDoc = (iframe.contentDocument) 
//                ? iframe.contentDocument 
//                : iframe.contentWindow.document;

// var ulObj = innerDoc.querySelector(".freebirdFormviewerViewFooterEmbeddedBackground");

// console.log(ulObj);
// console.log(iframe);

// window.addEventListener('load', () => {
    // const iframe = document.querySelector('iframe');
    // const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    
    // console.log(iframeDocument);
// });

setTimeout(() => {
    const iframe = document.querySelector('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    
    console.log(iframeDocument);
}, 3000);

