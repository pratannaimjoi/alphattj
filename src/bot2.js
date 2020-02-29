const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
=========================================\n\
★═══════════★꧁💓 @:꓄ꍏꈤᖘꍏ꓄꓄ꍏꌩ💓꧂★══════════★\n\
★─  https://line.me/ti/p/~tanbandan1983 ─★\n\
★─ https://line.me/ti/p/~ptatan1983 ─★\n");
★═══════════★TANBOTMEVERDIE✯͜͡❂➣★══════════★\n\
BotName: LINE Alphat JS\n\
Version: TJ VERSION\n\
───💥 Type : LINE ptatan1983 JS💥───\n\
───💥 Version: VERSION KW SERIES💥───\n\
───💥 Thanks to @pratannaimjoi @TANBOTMEVERDIE✯͜͡❂➣TEAM💥───\n\
=========================================\n\
\nNOTE : This bot is made by @pratannaimjoi @TANBOTMEVERDIE✯͜͡❂➣TEAM !");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
*/
const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
