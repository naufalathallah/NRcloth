//feedback
function checkEmailFeed(){
    mailformat = /\S+@\S+\.\S+/;
    if(document.feed.isiemail.value.match(mailformat)){
        return true;
    }
    else
        alert("Enter The Correct Email");
        document.feed.isiemail.value='';
}

function checkFeed(){
    if((document.feed.isiemail.value!='')&&(document.feed.komen.value!='')){
        alert("Berhasil Mengirim Feedback");
        return true;
    }
    else
        alert("Isi dengan benar");
        return false;
}

//shop
function checkEmailCheckout(){
    mailformat = /\S+@\S+\.\S+/;
    if(document.coform.isiemail.value.match(mailformat)){
        return true;
    }
    else
        alert("Enter The Correct Email");
        document.coform.isiemail.value='';
}

function checkPrice(){
    for(i=0;i<=document.coform.product.length;i++){
        if(document.coform.product.value==0){
            document.coform.harga.value='';
        }else if(document.coform.product.value==1){
            document.coform.harga.value=150000;
        }else if((document.coform.product.value==2)||(document.coform.product.value==3)){
            document.coform.harga.value=100000;
        }else if((document.coform.product.value==4)||(document.coform.product.value==5)){
            document.coform.harga.value=300000;
        }else if(document.coform.product.value==6){
            document.coform.harga.value=200000;
        }
    }
}

function quantity(){
    document.coform.totalharga.value=(document.coform.harga.value)*(document.coform.jumlah.value)
}

function diskon(){
    if((document.coform.voucher.value=='NR1')&&(document.coform.totalharga.value>=300000)){
        disc = document.coform.totalharga.value*20/100;
        document.coform.totalharga.value = (document.coform.totalharga.value)-(disc);
        alert('Selamat, anda mendapat diskon 20%');
    }
    else
        alert('Kode salah / Belum memenuhi syarat');
}

function akhir(){
    if((document.coform.nama.value!='')&&(document.coform.isiemail.value!='')&&(document.coform.jumlah.value!=0)&&(document.coform.rb[0].checked==true || document.coform.rb[1].checked==true || document.coform.rb[2].checked==true || document.coform.rb[3].checked==true )&&(document.coform.alamat.value!='')){
        alert('Berhasil, Silahkan Cek Pesan Masuk '+document.coform.isiemail.value);
        return true;
    }
    else
        alert('Isi dengan benar');
        return false;
}

function validate(){
    if(document.coform.product.value==0){
        alert('Select product');
        return false;
    }
    else
        return true;
}