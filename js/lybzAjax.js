//�ж�������ַ����Ƿ����ָ������
function checkstr(str,digit){ 
     var n=0;
     for(i=0;i<str.length;i++){
       var leg=str.charCodeAt(i);			//��ȡ�ַ�����ָ���ַ���Unicode����
       if(leg>255){
             n+=2;
       }else {
             n+=1;
       }
     }
     if (n>digit){
       return true;
     }else {
      return false;
     } 
}
//�ж��û���
function checkeUser(user){
	if(checkstr(user,20)){
		return false;
	}else{
		return true;	  
	}
}
//�ж�����
function checkePwd(user){
	var str=user;
	 //��JavaScript�У�������ʽֻ��ʹ��"/"��ͷ�ͽ���������ʹ��˫����
	var Expression=/^[A-Za-z]{1}([A-Za-z0-9]|[._]){5,29}$/; 
	var objExp=new RegExp(Expression);		//����������ʽ����
	if(objExp.test(str)==true){				//ͨ��������ʽ��֤
		return true;
	}else{
		return false;
	}
}

//��֤E-mail��ַ
function checkemail(email){
	var str=email;
	 //��JavaScript�У�������ʽֻ��ʹ��"/"��ͷ�ͽ���������ʹ��˫����
	var Expression=/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/; 
	var objExp=new RegExp(Expression);		//����������ʽ����
	if(objExp.test(str)==true){				//ͨ��������ʽ������֤
		return true;
	}else{
		return false;
	}
}
