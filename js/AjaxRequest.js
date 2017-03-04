var net=new Object();		//����һ��ȫ�ֱ���net
//��д���캯��
net.AjaxRequest=function(url,onload,onerror,method,params){
  this.req=null;
  this.onload=onload;
  this.onerror=(onerror) ? onerror : this.defaultError;
  this.loadDate(url,method,params);
}
//��д���ڳ�ʼ��XMLHttpRequest����ָ���������������HTTP����ķ���
net.AjaxRequest.prototype.loadDate=function(url,method,params){
  if (!method){
    method="GET";
  }
  if (window.XMLHttpRequest){	// Mozilla�����ȷ�IE�����
    this.req=new XMLHttpRequest();	 //����XMLHttpRequest����
  } else if (window.ActiveXObject){		//IE�����
		try{
			this.req=new ActiveXObject("Msxml2.XMLHTTP");	 //����XMLHttpRequest����
		}catch(e){
			try{
				this.req=new ActiveXObject("Microsoft.XMLHTTP");	 //����XMLHttpRequest����	
			}catch(e){}
		}
  }
  if (this.req){
    try{
      var loader=this;
      this.req.onreadystatechange=function(){
        net.AjaxRequest.onReadyState.call(loader);
      }
      this.req.open(method,url,true);	//�����������������
	  if(method=="POST"){		//������POST����ʱ����������ͷ
		this.req.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
	  }
      this.req.send(params);	//���������������
    }catch (err){
      this.onerror.call(this);	//���ô�������
    }
  }
}

//�ع��ص�����
net.AjaxRequest.onReadyState=function(){
  var req=this.req;
  var ready=req.readyState;	//��ȡ����״̬
  if (ready==4){
    if (req.status==200 ){
      this.onload.call(this);	//���ûص�����
    }else{
      this.onerror.call(this);	//���ô�������
    }
  }
}
//�ع�Ĭ�ϵĴ�������
net.AjaxRequest.prototype.defaultError=function(){
  alert("��������\n\n�ص�״̬:"+this.req.readyState+"\n״̬: "+this.req.status);
}