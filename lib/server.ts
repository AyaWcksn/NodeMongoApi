import app from "./app"
import {connect} from './db'

const PORT = 6969

connect()

app.listen(PORT, () => {
	console.log("Running on ", PORT)
})
