$('#download').click(function(){
    var printableArea=document.getElementById('main');
    html2canvas(printableArea, {
        useCORS: true,
        onrendered: function(canvas) {
      
          var pdf = new jsPDF('p', 'pt', 'letter');
      
          var pageHeight = 980;
          var pageWidth = 900;
          for (var i = 0; i <= printableArea.clientHeight / pageHeight; i++) {
            var srcImg = canvas;
            var sX = 0;
            var sY = pageHeight * i; // start 1 pageHeight down for every new page
            var sWidth = pageWidth;
            var sHeight = pageHeight;
            var dX = 0;
            var dY = 0;
            var dWidth = pageWidth;
            var dHeight = pageHeight;
          
            window.onePageCanvas = document.createElement("canvas");
            onePageCanvas.setAttribute('width', pageWidth);
            onePageCanvas.setAttribute('height', pageHeight);
            var ctx = onePageCanvas.getContext('2d');
            ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
          
            var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
            var width = onePageCanvas.width;
            var height = onePageCanvas.clientHeight;
          
            if (i > 0) // if we're on anything other than the first page, add another page
              pdf.addPage(612, 791); // 8.5" x 11" in pts (inches*72)
          
            pdf.setPage(i + 1); // now we declare that we're working on that page
            pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62)); // add content to the page
          }
          var invNo=document.getElementById('invoiceNo').value;
          pdf.save(`${invNo}.pdf`);
        }
    });
});


function cloneDiv(i) {
    const node = document.getElementById(i.toString());
    const parent = document.getElementById("parent");
    var clone = node.cloneNode(true);
    item=(parseInt(item)+1).toString();
    clone.id=item;

    var onC="cloneDiv("+item+")";
    var qrC='qrChange('+item+")";
    var del="delDiv("+item+")";
    parent.appendChild(clone);
    document.getElementById(item).getElementsByTagName("i")[0].setAttribute('onclick',onC);
    document.getElementById(item).getElementsByTagName("i")[1].setAttribute('onclick',del);
    document.getElementById(item).getElementsByTagName("input")[0].setAttribute('onchange',qrC);
    document.getElementById(item).getElementsByTagName("input")[1].setAttribute('onchange',qrC);
    amtChanged();
}

function delDiv(i){
    var id=i.toString();
    $(`#${id}`).remove();
    amtChanged();
}

function addItem(){
    cloneDiv(0);
    document.getElementById(item).style.display='flex';
    amtChanged();
}



function qrChange(i){
    var quantity=document.getElementById(i.toString()).getElementsByTagName("input")[0].value;
    var rate=document.getElementById(i.toString()).getElementsByTagName("input")[1].value;
    var amount=quantity*rate;
    var str="."+i.toString+"#amt";
    document.getElementById(i.toString()).getElementsByTagName("span")[1].innerHTML=amount;
    amtChanged();
}

function currChanged(){
    var cur=document.getElementById("currency").value;
    $('#amnt>.cur').text(cur);
    $('#totCur').text(cur);
    $('#finalCur').text(cur);
    conversionRate();
}

function amtChanged(){
    var all=document.getElementsByClassName("amt");
    var n=all.length;
    var total=0;
    for(var i=1;i<n;i++){
        total+=parseInt(all[i].innerHTML);
    }
    $('#subTotal').text(total);
    vatChanged();   
}

function vatChanged(){
    var vat=document.getElementById('vat').value;
    var total=document.getElementById('subTotal').innerHTML;
    var tax=(vat*total)/100;
    $('#taxVal').text(tax);
    totalChanged();
}

function totalChanged(){
    var sub=document.getElementById('subTotal').innerHTML;
    var tax=document.getElementById('taxVal').innerHTML;
    
    var gTotal=parseFloat(sub)+parseFloat(tax);
    $('#grandTotal').text(gTotal);
    $('#due').text(gTotal);
    conversionRate();
}

function conversionRate(){
    var cur=document.getElementById("currency").value;
    var due=parseFloat(document.getElementById("due").innerHTML);
    var usd=fromINR.usd;
    var aud=fromINR.aud;
    var gbp=fromINR.gbp;
    switch(cur){
        case "INR":
            $('#inr').text((due).toFixed(2));
            $('#usd').text((due*usd).toFixed(2));
            $('#gbp').text((due*gbp).toFixed(2));
            $('#aud').text((due*aud).toFixed(2));
            break;
        
        case "AUD":
            due=due/aud;
            $('#inr').text((due).toFixed(2));
            $('#usd').text((due*usd).toFixed(2));
            $('#gbp').text((due*gbp).toFixed(2));
            $('#aud').text((due*aud).toFixed(2));
            break;

        case "GBP":
            due=due/gbp;
            $('#inr').text((due).toFixed(2));
            $('#usd').text((due*usd).toFixed(2));
            $('#gbp').text((due*gbp).toFixed(2));
            $('#aud').text((due*aud).toFixed(2));
            break;

        case "USD":
            due=due/usd;
            $('#inr').text((due).toFixed(2));
            $('#usd').text((due*usd).toFixed(2));
            $('#gbp').text((due*gbp).toFixed(2));
            $('#aud').text((due*aud).toFixed(2));
            break;

    }
}