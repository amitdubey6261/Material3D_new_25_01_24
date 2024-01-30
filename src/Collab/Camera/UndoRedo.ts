import { lightMap } from "./CollLights";
import * as Y from 'yjs'

export const undoManager = () =>{
    const undomanager = new Y.UndoManager([lightMap]) ; 
    const undoBtn = document.querySelector('#Undo') as HTMLInputElement ; 
    const redoBtn = document.querySelector('#Redo') as HTMLInputElement ;
    undoBtn.addEventListener('click' , () =>{
        if( undomanager.canUndo() ){
            undomanager.undo() ; 
        }
        else{
            alert( 'stop undo') ; 
        }
    }) 
    redoBtn.addEventListener('click' , ()=>{
        if( undomanager.canRedo() ){
            undomanager.redo() ; 
        }
        else{
            alert( 'stop redo') ;
        }
    })
}