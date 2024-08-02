function Base64(file:any):boolean|any{console.log(file)
  return new Promise((res,rej)=>{
    if(file){
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{ res(reader.result)}
        reader.onerror=()=>{rej(false)}
    }
    
  }) 
    
}
export {Base64}