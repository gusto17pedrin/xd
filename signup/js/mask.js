function maskCPF(v){if(v!=''){v=v.replace(/\D/g,"");v=v.replace(/(\d{3})(\d)/,"$1.$2");v=v.replace(/(\d{3})(\d)/,"$1.$2");v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");}return v}function maskPhone(v){if(v!=''){v=v.replace(/\D/g,"");v=v.replace(/(\d{2})(\d)/,"($1) $2");v=v.replace(/(\d{5})(\d)/,"$1-$2");}return v;}function unmaskCPF(cpf){return cpf.replace(/\D/g,'');}function unmaskPhone(phone){return phone.replace(/\D/g,'');}