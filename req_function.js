import fs from "fs"

export let get_data = (req,res)=>{
    try {
        res.json("Successfuly added")
        fs.readFile("./todo.json","utf-8",(error,data)=>{
            if(error){
                console.log(error);
                return;
            }
            let datas = data ? JSON.parse(data) : [];
            datas.push(req.body);
            fs.writeFile("./todo.json",JSON.stringify(datas),(error)=>{
                if(error){
                    console.log(error);
                    return;
                }
                console.log("Data Successfully Recived");
            })
        })
    } catch (error) {
        console.log(error);
        return;
    }

}

export let send_data = (req,res)=>{
    try {
        fs.readFile("./todo.json","utf-8",(error,data)=>{
            if(error){
                console.log(error);
                return;
            }
            res.send(data)
        })
    } catch (error) {
        console.log(error);
        return;
    }
}

export let delet_data =(req,res)=>{
    try {
        res.json("data successfully deleted");
        let {id} = req.body;
        fs.readFile("./todo.json","utf-8",(error,data)=>{
            if(error){
                console.log(error);
                return;
            }
            let array = data ? JSON.parse(data) : [];
            array = array.filter((item,index)=> id != index )
            fs.writeFile("./todo.json",JSON.stringify(array),(error)=>{
                if(error){
                    console.log(error);
                }
            })
        })
        console.log("data successfully deleted");
    } catch (error) {
        console.log(error);
        return;
    }

}

export let edit_data = (req,res)=>{
    try {
        let {id,edit_data} = req.body;
        fs.readFile("./todo.json","utf-8",(error,data)=>{
            if(error){
                console.log(error);
                return;
            }
            let array = data ? JSON.parse(data) : [];
            array= array.map((item,index)=>{
                if(index == id){
                    return {todo:edit_data};
                }
                return item;
            })
            fs.writeFile("./todo.json",JSON.stringify(array),(error)=>{
                if(error){
                    console.log(error);
                    return;
                }
            })
            res.json("sussessfully edited")
            console.log("sussessfully edited");
        })
    } catch (error) {
        console.log(error);
        return;
    }
}

