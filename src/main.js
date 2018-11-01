// Taken straight from https://prosemirror.net/examples/basic/

// These dependencies are declared in the prosemirror-example-setup module.
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {addListNodes} from "prosemirror-schema-list"

// We declared this dependency directly in our project.
import {schema} from "prosemirror-schema-basic"

// @exampleSetup is an array of ProseMirror plugins; it is essentially a 
// "plugin" consisting of actual PM plugins.
import {exampleSetup} from "prosemirror-example-setup"

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    marks: schema.spec.marks
})

// 1) Put 'view' on window object just for easy inspection/debugging
// 2) '#editor' is the ID of the DOM element that will host the DOM.
window.view = new EditorView(document.querySelector("#editor"), {

    state: EditorState.create({

        // Here the document state is read from the DOM, the HTML markup on
        // the simple file, public/index.html page that contains the editor;
        // '#content' is the ID of the DOM element that has your pre-prepared content
        // to be injected into the editor.  The only reason this is done in this
        // demo project is to prevent you from starting with a blank editor.
        doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),

        // Instantiate all the plugins to make a very basic editor
        plugins: exampleSetup({schema: mySchema})

    })//,

    // The rest is commented out as you have a basic editor.
    // This section uses a sort of 'wiretap' into ProseMirror's event flow to
    // let you see inside the basic editor model.

    //dispatchTransaction( transaction ) {
        // console.log("Document size went from", transaction.before.content.size,
        //            "to", transaction.doc.content.size)

        // console.log( 'State', JSON.stringify( this.state.toJSON(), null, 4 ))

        // let newState = window.view.state.apply(transaction)
        //window.view.updateState(newState)
    //}
})