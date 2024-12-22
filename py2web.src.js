/~ --- make with --- ~/
/~ --- rhino jscc.js py2web.src.js > py2web.tmp.js && java -jar yuicompressor-2.4.8.jar py2web.tmp.js --line-break 80 -o py2web.js --- ~/
/~ --- Py2Web uses modified template driver_rhino.js_  --- ~/
/~ --- so ignore the warning that rhino driver should not be used for web --- ~/


/~ --- syntax --- ~/

/~ --- Token definitions --- ~/

/~ Characters to be ignored ~/
!   ' |\t|\r|\n' ;

/~ Non-associative tokens ~/
    '90|180|270'                        Angle            [* %match = parseInt( %match );    *]
    '\['
    '\]'
    '\{([^\{])*\}'                    Comment     [* %match = %match.substr(1, %match.length - 2);    *]
    '\-'
    '\*'
    '\+'
    '='
    '[=#]'                            OtherCheckSign
    '[!\?][!\?]?'                    Annotation                            
    '[cjkprvfhmu]+'                    FairyProps
    '[A-Z]|([0-9A-Z][0-9A-Z])'        PieceName
    '[0-9]+\.'                        MoveNo        [* %match= parseMoveNo(%match);  *]
    '[a-h][1-8]'                    Square        [* %match = parseSquare(%match);  *]
    '[nbw]\b'                       TerminatingColorPrefix
    'n'
    'w'
    'b'
    '\.\.'
    '\.\.\.'                        
    '0\-0'                        
    '0\-0\-0'                        
    'ep\.'
    'threat:'
    'but'
    'zugzwang\.'
    '[a-z][0-9]*\)'                        TwinId         [* %match = %match.substring(0, %match.length - 1); *]
    '->'
    '-->'
    '==>'
    '<-->'
    'rotate'
    'mirror'
    'shift'
    'PolishType'
    'Imitator'
    '\[I'
    ','
    ;


##

/~ --- Grammar specification --- ~/

BuildTree: Solution                            [* 
                                                __rootNode = %1[0]
                                                __rootNode.unflatten(%1, 1)
                                                __rootNode.linkContinuedTwins()
                                            *]
        ;

Solution: MoveList                            [* %1.unshift(new Node(), new VirtualTwinNode()); %% = %1; *]
        | TwinList                            [* %1.unshift(new Node()); %% = %1; *]
        | Comments Solution                    [* %2[0].setv('comments', %1); %% = %2; *]
        |                                    [* %% = [new Node()] /* Empty input */ *]        
        ;

TwinList: Twin
        | TwinList Twin                     [* %1.push.apply(%1, %2); %% = %1; *]
        ;

Twin: TwinHeader MoveList                    [* %2.unshift(%1); %% = %2; *]
        ;

TwinHeader: TwinBullet
        | TwinBullet CommandList            [* %% = %1.setv('commands', %2) *]
        | TwinHeader Comments                 [* %% = %1.setv('comments', %2) *]
        ;

TwinBullet:  TwinId                            [* %% = new TwinNode(%1, false) *]
        | '+' TwinId                        [* %% = new TwinNode(%2, true) *]
        ;

CommandList: Command                         [* %% = [%1] *]
        | CommandList Command                 [* %1.push(%2); %% = %1 *]
        ;

Command: LongPieceDecl Square '-->' Square                 [* %% = new TwinCommand('Move', [%2, %4]) *]
        | LongPieceDecl Square '<-->' LongPieceDecl Square     [* %% = new TwinCommand('Exchange', [%2, %5]) *]
        | '-' LongPieceDecl Square                          [* %% = new TwinCommand('Remove', [%3]) *]
        | '+' LongPieceDecl Square                          [* %% = new TwinCommand('Add', [%2, %3]) *]
        | 'rotate' Angle                                  [* %% = new TwinCommand('Rotate', [%2]) *]
        | 'mirror' Square '<-->' Square             [* %% = new TwinCommand('Mirror', [%2, %4]) *]
        | 'shift' Square '==>' Square                 [* %% = new TwinCommand('Shift', [%2, %4]) *]
        | 'PolishType'                                 [* %% = new TwinCommand('PolishType', []) *]
        | 'Imitator' SquareList                         [* %% = new TwinCommand('Imitator', %2) *]
        | LongPieceDecl Square                          [* %% = new TwinCommand('Add', [%1, %2]) *]
        ;


MoveList:    Move
        | MoveList Move                        [* %1.push.apply(%1, %2); %% = %1; *]
        ;

Move: MoveNo HalfMove HalfMove                [* %% = [%2.setv('depth', %1), %3.setv('depth', %1 + 1)]; *]
        | MoveNo '..' HalfMove                [* %% = [%3.setv('depth', %1 + 1)]; *]
        | MoveNo '..' '...'                 [* %% = [new NullNode(%1, false)] *]    
        | MoveNo HalfMove 'threat:'            [* %% = [%2.setv('depth', %1).setv('childIsThreat', true)]; *]
        | 'but'  MoveNo '..' HalfMove        [* %% = [%4.setv('depth', %2 + 1)]; *]
        | MoveNo HalfMove 'zugzwang.'        [* %% = [%2.setv('depth', %1)]; *]
        | MoveNo HalfMove                    [* %% = [%2.setv('depth', %1)]; *]
        ;

Ply: Body                                                                [*  %% = %1; *]
         | Ply '=' TerminatingColorPrefix                                        [* %1.recolorings[%3].push(%1.arrival); %% = %1; *]
         | Ply '=' PieceDecl                                             [*  %% = %1.setv('promotion', %3); *]
         | Ply '=' LongPieceDecl                                         [*  %% = %1.setv('promotion', %3); *]
         | Ply '[' '+' LongPieceDecl Square '=' PieceDecl ']'             [* %1.rebirths.push( {unit:%4, at: %5, prom:%7} ); %% = %1; *] 
         | Ply '[' '+' LongPieceDecl Square ']'                             [* %1.rebirths.push( {unit:%4, at: %5, prom:null} ); %% = %1; *] 
         | Ply '[' LongPieceDecl Square '->' Square '=' PieceDecl  ']'    [* %1.antirebirths.push( {unit:%3, from: %4, to: %6, prom:%8} ); %% = %1; *] 
         | Ply '[' LongPieceDecl Square '->' Square ']'                    [* %1.antirebirths.push( {unit:%3, from: %4, to: %6, prom:null} ); %% = %1; *] 
        | Ply '[' Square '=' PieceDecl ']'                                 [* %1.promotions.push({unit: %5, at:%3} ); %% = %1; *]
        | Ply '[' Square '=' ColorPrefix ']'                             [* %1.recolorings[%5].push(%3); %% = %1; *]
         | Ply '[' '-' Square ']'                                         [* %1.removals.push(%4); %% = %1; *]
        | Ply '[I' SquareList ']'                                         [* %1.imitators = %3; %% = %1; *]
         | Ply '='                                                          [*  %% = %1.setv('checksign', '='); *]
        ;

HalfMove: Ply CheckSign                     [* %% = %1.setv('checksign', %2); *]
        | Ply
        | HalfMove Annotation                 [* %% = %1.setv('annotation', %2); *]
        | HalfMove Comments                     [* %% = %1.setv('comments', %2); *]
        ;

Body: PieceDecl Squares                        [* %% = %2.setv('promotion', %1).setv('departant', %1); *]
        | PawnMove
        | Castling
        | Body 'ep.'                           [* %% = %1.setEnPassant(); *]
        ;

LongPieceDecl: ColorPrefix PieceName                    [* %% = new Piece(%2, %1, ''); *]
        | ColorPrefix FairyProps PieceName        [* %% = new Piece(%3, %1, %2); *]
        ;

ColorPrefix: 'n' | 'w' | 'b';

PieceDecl: PieceName                             [* %% = new Piece(%1, 'u', ''); *]
        | 'n' PieceName                            [* %% = new Piece(%2, %1, ''); *]
        | 'n' FairyProps PieceName                 [* %% = new Piece(%3, %1, %2); *]
        | FairyProps PieceName                     [* %% = new Piece(%2, 'u', %1); *]
        ;

PawnMove: Squares                            [* %% = %1.setv('promotion', new Piece('P', 'u', '')).setv('departant', new Piece('P', 'u', '')); *]
        ;

Squares: Square '-' Square                    [* %% = new MoveNode(%1, %3, -1); *]
        | Square '*' Square                    [* %% = new MoveNode(%1, %3, %3); *]
        | Square '*' Square '-' Square        [* %% = new MoveNode(%1, %5, %3); *]
        ;

SquareList: Square                            [* %% = [%1] *]
        | SquareList ',' Square                [* %1.push(%3); %% = %1; *]
        | SquareList Square                    [* %1.push(%2); %% = %1; *]
        ;

Castling: '0-0'                                [* %% = new CastlingNode(true); *]
        | '0-0-0'                            [* %% = new CastlingNode(false); *]
        ;

CheckSign: '+'
        | OtherCheckSign
        ;

Comments: Comment                           [* %% = [%1] *]
    | Comments Comment                      [* %1.push(%2); %% = %1; *]
    ;

[*


/*

  + SVN repo: https://code.google.com/p/py2web/source/browse/#svn%2Ftrunk
  + draw diagrams even with parse and symantic errors in solution
  + multiple comments
  + {display-departure-square}
  + Py2Web.init() returns success count
  + Any notation (unicode figurine included)
  - stalemates bug (p2w expects promotion after "=")
  - e.p.

*/

/**********************
semantics
**********************/


if (!Array.prototype.map) {
    Array.prototype.map = function(fun /*, thisp*/) {
        var len = this.length;
        if (typeof fun != "function")
            throw new TypeError();

        var res = new Array(len);
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
          if (i in this)
            res[i] = fun.call(thisp, this[i], i, this);
        }

        return res;
    };
}

function to_xy(i) {
    return {x: i % 8, y: i >> 3}
}

function from_xy(x, y) {
    return y*8 + x
}

function parseMoveNo(str) {
    return 2*parseInt(str.substr(0, str.length - 1))
}


function parseSquare(str) {
    return str.charCodeAt(0) - "a".charCodeAt(0) + 8*(7 - str.charCodeAt(1) + "1".charCodeAt(0)) 
}

function algebraic(square) {
    return "abcdefgh".charAt(square % 8) + "87654321".charAt(square >> 3)
}

function __setv(k, v) {
    this[k] = v
    return this
}

function Piece(n, c, s) {

    this.name = n
    this.color = c
    this.specs = s

    this.setv = __setv

    this.xfen = function () {
        var glyph = this.name.toLowerCase() in __fairyHelper.override?
            __fairyHelper.override[this.name.toLowerCase()]:
            __fairyHelper.glyphs[this.name.toLowerCase()]

        if (this.color == 'w') {
            glyph = glyph.toUpperCase()
        } else {
            glyph = glyph.toLowerCase()
        }

        if (this.color == 'n') {
            glyph = '!' + glyph
        }

        if (this.specs != '') {
            glyph = 'b' + glyph
        }

        if (glyph.length > 1) {
            glyph = '(' + glyph + ')'
        }

        return glyph
    } 

    this.inverseColor = function() {
        if(this.color == 'w')
            this.color = 'b'
        else if(this.color == 'b')
            this.color = 'w'
    }

    this.asText = function() {
        var name = this.name;
        if(__fairyHelper.notation[name]) {
            name = __fairyHelper.notation[name];
        }
        return (this.color == 'n'? 'n': '') + this.specs + name;
    }

}

function ParsePiece(xfen) {
    var c = "b"
    if(xfen.charAt(0) == "!") {
        c = "n";
        xfen = xfen.substring(1);
    } else if (xfen.toUpperCase() == xfen) {
        c = "w"
    }

    return new Piece(xfen.toUpperCase(), c, [])    
}

function FairyHelper() {
    this.override = {};
    this.notation = {};
    this.glyphs = {
        '15':'s3', '16':'s3', '24':'s3', '25':'s3', '35':'s3', '36':'s3', '37':'s3', 'al':'b3', 'am':'a', 'an':'s1', 'ao':'s1',
        'ar':'b2', 'b':'b', 'b1':'o', 'b2':'o', 'b3':'o', 'be':'o', 'bh':'b2', 'bi':'o', 'bk':'s1', 'bl':'b3', 'bm':'o',
        'bn':'s2', 'bo':'o', 'bp':'p2', 'br':'o', 'bs':'p2', 'bt':'o', 'bu':'s1', 'bw':'o', 'c':'b1', 'ca':'s3', 'cg':'q1',
        'ch':'s3', 'cp':'p3', 'cr':'s3', 'ct':'o', 'cy':'o', 'da':'r1', 'db':'b1', 'dg':'q1', 'dk':'r1', 'do':'q3', 'dr':'o',
        'ds':'o', 'du':'p1', 'ea':'q3', 'eh':'q1', 'ek':'o', 'em':'r2', 'eq':'e', 'et':'o', 'f':'o', 'fe':'b3', 'fr':'o',
        'g':'q2', 'g2':'q1', 'g3':'q3', 'ge':'o', 'gf':'o', 'gh':'s1', 'gi':'s1', 'gl':'o', 'gn':'s1', 'gr':'o', 'gt':'o',
        'ha':'q3', 'k':'k', 'ka':'q3', 'kl':'q3', 'kh':'k2', 'kl':'q1', 'ko':'o', 'kp':'s2', 'l':'q1', 'lb':'b1', 'le':'q3',
        'lh':'o', 'li':'q3', 'ln':'s1', 'lr':'r1', 'ls':'f', 'm':'o', 'ma':'s1', 'mg':'o', 'mh':'o', 'ml':'o', 'mm':'o',
        'mo':'s3', 'mp':'p3', 'ms':'s3', 'n':'s2', 'na':'s3', 'nd':'b3', 'ne':'e', 'nh':'s3', 'nl':'s3', 'o':'o', 'oa':'s1',
        'ok':'o', 'or':'e1', 'p':'p', 'pa':'r3', 'po':'k3', 'pp':'p2', 'pr':'b2', 'q':'q', 'qe':'e', 'qf':'e', 'qn':'o',
        'qq':'o', 'r':'r', 'ra':'o', 'rb':'b3', 're':'r1', 'rf':'o', 'rh':'r2', 'rk':'o', 'rl':'r3', 'rm':'r1', 'rn':'f',
        'rp':'f', 'ro':'f', 'rr':'o', 'rt':'q1', 'rw':'o', 's':'s', 's1':'s2', 's2':'s2', 's3':'s2', 's4':'s2', 'sh':'o',
        'si':'q3', 'sk':'a', 'so':'o', 'sp':'p1', 'sq':'o', 'ss':'o', 'sw':'o', 'th':'o', 'tr':'r3', 'uu':'o', 'va':'b3',
        'wa':'o', 'we':'r2', 'wr':'o', 'z':'s3', 'zh':'o', 'zr':'s1', 'ze':'o', 'ms':'s3',
        'fa':'r1','se':'q1','sa':'s1','lo':'b1'
    };
    this.captureGlyph = "x";
    this.pprops = ['chameleon', 'jigger', 'kamikaze', 'paralysing', 'royal', 'volage', 'functionary', 'halfneutral', 'hurdlecolourchanging',
                'protean', 'magic', 'uncapturable'];
}

// RootNode -->  TwinNode | VirtualTwinNode --> NullNode | MoveNode | CastlingNode


function Node() {
    this.depth = 0
    this.childIsThreat = false
    this.setv = __setv
    this.comments = []
    this.prefix = ""

    /*
    This is basically the same recursive tree-building algo as in
    olive-gui/legacy/chess.py::Node::parse_solution
    */
    this.unflatten = function(nodes, offset) { 

        this.children = []

        while(offset < nodes.length) {

            // case 1: nodes[offset] is a direct child of this --> add to children and recurse
            if (this.depth + 1 == nodes[offset].depth) {
                this.children.push(nodes[offset])
                offset = nodes[offset].unflatten(nodes, offset + 1)
            }
            // case 2: nodes[offset] is a grand-child of this --> create intermediate null-nodes
            else if (this.depth + 1 < nodes[offset].depth) {
                var nn = new NullNode(this.depth + 1, this.childIsThreat)
                this.children.push(nn)
                offset = nn.unflatten(nodes, offset)
            }
            // case 3: nodes[offset] is not a child of this
            else {
                return offset
            }
        }
    }

    this.linkContinuedTwins = function() {
        for(var i = 1; i < this.children.length; i++) {
            if(this.children[i].isContinued) {
                this.children[i].anticipator = this.children[i-1]
            }
        }
    }


    this.print = function (accumulator, board, prefix) {
        this.make(board)
        accumulator.add(this.asOverriddenText(), board, true, this.getCommentsAsText())

        for(var i = 0; i < this.children.length; i++) {
            fp = this.children[i].fullPrefix()
            accumulator.add(fp.indent, board, false, '')
            this.children[i].prefix = fp.prefix
            this.children[i].print(accumulator, board)
        }

        this.unmake(board)
    }
    
    this.getCommentsAsText = function() {
        var retval = '';
        for(var i = 0; i < this.comments.length; i++) {
            if(!this.isCommentCommand(this.comments[i])) {
                retval += this.comments[i];
            }
        }
        return retval;
    }


    this.printChildren = function(accumulator, board) {
        for(var i = 0; i < this.children.length; i++) {
            fp = this.children[i].fullPrefix()
            if(this.children.length > 1) {

                if(!this.children[i].noNewLine() &&
                    !(this.isNull() && this.isHalfPlySetPlay() && this.children[i].isNull())
                ) {

                    accumulator.add("\n", board, false, '')
                    accumulator.add(i > 0? " ": "  ", board, i > 0, '')
                }

                accumulator.add(fp.indent, board, false, '')
            } else {
                if(this.depth == 1) {
                    accumulator.add("\n", board, false, '')
                    fp.prefix = "";
                }
                if(this.isSetPlay() && (this.depth == 2)) {
                    accumulator.add(fp.indent, board, false, '')
                } else {
                    fp.prefix = this.children[i].shortPrefix()
                }
            }
            this.children[i].prefix = fp.prefix
            this.children[i].print(accumulator, board)
        }
    }

    this.noNewLine = function() {return false}
    this.isSetPlay = function() {return false}
    this.isNull = function() {return false}

    this.fullPrefix = function() {
        
        var retval = {"indent": "", "prefix": ""}

        if(this.depth < 3 && !this.noNewLine()) {
            retval.indent += "\n"
        }
        else {
            for(var i = 0; i < this.depth - 2; i++) {
                retval.indent += " "
            }
        }

        retval.prefix +=  this.depth >> 1
        retval.prefix +=  (this.depth % 2 != 0) ? '...': '.'
        return retval
    }

    // N. for first halfmove, empty for second halfmove
    this.shortPrefix = function() {
        return (this.depth % 2 != 0)? '': (this.depth >> 1) + '.'
    }

    this.make = this.unmake = function(b) {}

    this.asText = function() {
        return "***"
    }

    this.asOverriddenText = function() {
        const command = "display:";
        for(let i = 0; i < this.comments.length; i++) {
            if (this.comments[i].startsWith(command)) {
                const text = this.comments[i].substring(command.length);
                return this.prefix + text
            }
        }
        return this.asText()
    }

    this.isCommentCommand = function(comment) {
        return comment.startsWith("display:") ||
            ['display-departure-square',
            "display-departure-file",
            "display-departure-rank"].indexOf(comment) != -1
    }
}
__node = new Node()


function SolutionBuilder() {
    this.html = ""

    this.add = function(text, board, traversable, comment) {
        if (text == "") {
            return
        }
        this.html += traversable? this.anchor(board.toFen(), text): text
        if(comment != '')
            this.html += '<span class="comment">' + comment + '</span> '
    }

    this.anchor = function(fen, text) {
        return '<a href="#" fen="' + fen + '">' + text + '</a> '
    }

    this.build = function(node, board) {
        node.print(this, board)
        return this.html
    }
}


function NullNode(depth, is_threat) {

    this.depth = depth
    this.is_threat = is_threat

    this.isHalfPlySetPlay = function() {
        var hasNullChild = false
        for(var i = 0; i < this.children.length; i++) {
            if(this.children[i].isNull()) {
              return this.depth == 2
            }
        }
        return false
    }

    this.asText = function() {

        // special case of h#n.5*
        if(this.isHalfPlySetPlay()) {
            return "\n1... ... "
        }

        return this.is_threat? "~ ": ""
    }
    
    this.print = function (accumulator, board) {
        this.make(board)
        accumulator.add(this.asOverriddenText(), board, false, this.getCommentsAsText())

        this.printChildren(accumulator, board)

        this.unmake(board)
    }

    this.fullPrefix = function() { return  {"indent": "", "prefix": ""} }
    this.shortPrefix = function() { return "" }

    this.noNewLine = function() {
        return this.is_threat
    }

    this.isSetPlay = function() {
        return !this.is_threat
    }

    this.isNull = function() {return true}
    
    this.make = this.unmake = function(b) {
        b.flip()
    }

}
NullNode.prototype = __node

function TwinNode(id, isContinued) {
    this.depth = 1

    this.id = id
    this.isContinued = isContinued
    this.anticipator = null
    this.commands = []

    this.asText = function() {
        return this.id + ')'
    }

    this.fullPrefix = function() { return  {"indent": "\n\n", "prefix": ""} }

    this.make = function(b) {
        this.oldboard = b.serialize()

        if(this.anticipator != null) {
            this.anticipator.make(b)
        }

        for(var i = 0; i < this.commands.length; i++) {
            this.commands[i].exec(b)
        }
    }

    this.unmake = function(b) {
        b.unserialize(this.oldboard)
    }
}
TwinNode.prototype = __node
__twinNode = new TwinNode()

function VirtualTwinNode() {
    this.fullPrefix = function() { return  {"indent": "", "prefix": ""} }
    this.shortPrefix = function() { return "" }


    this.print = function (accumulator, board) {
        this.make(board)
        this.printChildren(accumulator, board)
        this.unmake(board)
    }
}
VirtualTwinNode.prototype = __twinNode

function TwinCommand(name, args) {
    this.name = name
    this.args = args

    this.exec = function(b) {
        switch(this.name) {
            case 'Move':
                b.add(b.board[this.args[0]], this.args[1])
                b.drop(this.args[0])
                break;
            case 'Exchange':
                var tmp = b.board[this.args[0]]
                b.board[this.args[0]] = b.board[this.args[1]]
                b.board[this.args[1]] = tmp
                break;
            case 'Remove':
                b.drop(this.args[0]); break;
            case 'Add':
                b.add(this.args[0], this.args[1]); break;
            case 'Rotate':
                b.rotate(this.args[0]); break;
            case 'Mirror':
                b.mirror(this.args[0], this.args[1]); break;
            case 'Shift':
                b.shift(this.args[0], this.args[1]); break;
            case 'PolishType':
                b.polishTwin(); break;
            case 'Imitator':
                b.imitators = args; break;

        }
    }

}

function MoveNode (dep, arr, cap) {

    this.departure = dep
    this.arrival = arr
    this.departant = null
    this.promotion = null
    this.capture = cap
    this.recolorings = {w:[], b:[], n:[]}
    this.rebirths = []    
    this.antirebirths = []
    this.promotions = []  // when promoted is some other piece, not the one that arrives, eg in KobulKings
    this.imitators = []
    this.removals = []

    this.annotation = ''
    this.checksign = ''
    this.enPassant = false

    this.setEnPassant = function() {
        var dep = to_xy(this.departure)
        var arr = to_xy(this.arrival)
        this.capture = from_xy(arr.x, dep.y)
        this.enPassant = true
        return this
    }

    this.makeBasicMovement = function(b) {
        if(this.promotion == null) {
            this.promotion = b.board[this.departure]
        }

        if(this.promotion.color == 'u') {
            if(b.board[this.departure].color != 'u') {
                this.promotion.color = b.board[this.departure].color
            } else {
                this.promotion.color = b.getStm()
            }
        }

        // capturing
        if(this.capture != -1) {
            b.drop(this.capture)
        }

        // moving and promoting
        b.drop(this.departure)
        b.add(this.promotion, this.arrival)
    }

    this.make = function(b) {

        this.assertSemantics(b)

        this.oldboard = b.serialize()
        this.makeBasicMovement(b)
        b.flip()

        // recoloring
        for(var k in this.recolorings) {
            for(var i = 0; i < this.recolorings[k].length; i++) { 
                if(b.board[this.recolorings[k][i]] != null) {
                    b.board[this.recolorings[k][i]].color = k
                }
            }
        }

        // antirebirths
        for(var i = 0; i < this.antirebirths.length; i++) {
            b.move(this.antirebirths[i].from, this.antirebirths[i].to)
            if(this.antirebirths[i].prom != null) {
                b.board[this.antirebirths[i].to].name = this.antirebirths[i].prom.name
                b.board[this.antirebirths[i].to].specs = this.antirebirths[i].prom.specs
            }
        }

        // rebirths
        for(var i = 0; i < this.rebirths.length; i++) {
            b.add(
                this.rebirths[i].prom == null?
                    this.rebirths[i].unit:
                    this.rebirths[i].prom,
                this.rebirths[i].at
            )
        }

        // promotions
        for(var i = 0; i < this.promotions.length; i++) {
            b.board[this.promotions[i].at].name = this.promotions[i].unit.name
            if(this.promotions[i].unit.specs != '') {
                b.board[this.promotions[i].at].specs = this.promotions[i].unit.specs
            }
        }

        // imitators
        b.imitators = this.imitators
        
        // removals
        for(var i = 0; i < this.removals.length; i++) {
            b.drop(this.removals[i])
        }
        
    }

    this.unmake = function(b) {
        b.unserialize(this.oldboard)
    }

    this.asText = function() {

        var pieceName = this.departant.asText()
        if (this.departant.name.toUpperCase() == 'P') {
            pieceName = (this.capture != -1)? algebraic(this.departure).charAt(0): ''
        }
        
        var depsquares = ''
        if(this.comments.indexOf('display-departure-square') != -1) {
            depsquares += algebraic(this.departure);
            if(this.capture == -1) {
                depsquares += '-'
            }
        } else if(this.comments.indexOf('display-departure-file') != -1) {
            depsquares += algebraic(this.departure)[0];
        } else if(this.comments.indexOf('display-departure-rank') != -1) {
            depsquares += algebraic(this.departure)[1];
        }

        var squares = algebraic(this.arrival)
        if(this.capture != -1) {
            if(this.capture == this.arrival ) {
                squares = __fairyHelper.captureGlyph + algebraic(this.arrival)
            } else if(this.enPassant) {
                squares = __fairyHelper.captureGlyph + algebraic(this.arrival) + ' ep.'
            }
            else {
                squares = __fairyHelper.captureGlyph + algebraic(this.capture) + '&rarr;' + algebraic(this.arrival)
            }
        }

        var retval = this.prefix + pieceName + depsquares + squares

        if(this.departant.asText() != this.promotion.asText()) {
            var promAsText = this.promotion.asText()
            if(
                (this.departant.color != this.promotion.color) &&
                (this.promotion.color != 'n') &&
                (this.departant.color != 'u')
            ) {
                promAsText = this.promotion.color + promAsText // halfneutrals workaround
            }
            retval += '=' + promAsText
        }

        retval += this.imitatorsAsText() + this.recoloringsAsText() + this.antirebirthsAsText()
            + this.rebirthsAsText() + this.promotionsAsText() + this.removalsAsText()

        if(this.checksign != '')
            retval += this.checksign

        if(this.annotation != '')
            retval += this.annotation

        return retval 

    }

    this.removalsAsText = function() {
        acc = []
        for(var k in this.removals) {
            acc.push('[-' + algebraic(this.removals[k]) + ']')
        }
        if(acc.length > 0) {
            return ' ' + acc.join('')
        }

        return ''
    }
    
    this.imitatorsAsText = function() {
        return this.imitators.length == 0?
            '': ' (I' + this.imitators.map(algebraic).join(',') + ')'
    }

    this.recoloringsAsText = function() {
        acc1 = []
        for(var k in this.recolorings) {
            if(this.recolorings[k].length > 0) {
                acc2 = []
                for(var i = 0; i < this.recolorings[k].length; i++) 
                    acc2.push(algebraic(this.recolorings[k][i]))
                acc1.push('[' + acc2.join(',') + '=' + k + ']')
            }
        }
        if(acc1.length > 0) {
            return ' ' + acc1.join('')
        }

        return ''
    }

    this.antirebirthsAsText = function() {
        acc = []
        for(var i = 0; i < this.antirebirths.length; i++) {
            var prom = (this.antirebirths[i].prom == null)? '': '=' + this.antirebirths[i].prom.asText()
            acc.push(
                '(' + 
                    this.antirebirths[i].unit.asText() +
                    algebraic(this.antirebirths[i].from) +
                    '&rarr;' +
                    algebraic(this.antirebirths[i].to) + prom + ')'
            )
        }
        if(acc.length > 0) {
            return ' ' + acc.join(' ')
        }

        return ''
    }

    this.rebirthsAsText = function() {
        acc = []
        for(var i = 0; i < this.rebirths.length; i++) {
            var prom = (this.rebirths[i].prom == null)? '': '=' + this.rebirths[i].prom.asText()
            acc.push(
                '(+' + this.rebirths[i].unit.asText() +
                    algebraic(this.rebirths[i].at) + prom + ')'
            )
        }
        if(acc.length > 0) {
            return ' ' + acc.join(' ')
        }
        return ''
    }

    this.promotionsAsText = function() {
        acc = []
        for(var i = 0; i < this.promotions.length; i++) {
            acc.push('(' + algebraic(this.promotions[i].at) + '=' + this.promotions[i].unit.asText() + ')')
        }
        if(acc.length > 0) {
            return ' ' + acc.join(' ')
        }
        return ''
    }

    this.print = function (accumulator, board) {
        this.make(board)
        var text = this.asOverriddenText()
        accumulator.add(text, board, true, this.getCommentsAsText())

        this.printChildren(accumulator, board)
        
        this.unmake(board)
    }

    this.assertSemantics = function(b) {
        var err = null
        if(b.board[this.departure] == null) {
            err = "Departure from empty square " + algebraic(this.departure)
        } else if((b.board[this.arrival] != null) && (this.capture == -1) && (this.arrival != this.departure)) {
            err = "Arrival square " + algebraic(this.arrival) + ' is occupied but no capture is specified'
        } else if((b.board[this.arrival] != null) && (this.capture != this.arrival) && (this.arrival != this.departure)) {
            //(this.arrival != this.departure) - found by Roland Ott: not an error in Anticirce/Take&Make variants (Sc2*a1-c2) 
            err = "Arrival square " + algebraic(this.arrival) + ' is occupied but capture is specified at ' + algebraic(this.capture)
        } else if((this.capture != -1) && (b.board[this.capture] == null)) {
            err = "Capture at empty square " + algebraic(this.capture)
        }

        // todo: rebirth, recolorings

        if(err) {
            throw "Semantic error at depth " + this.depth + ": " + err     
        }
    }
}
MoveNode.prototype = __node
__moveNode = new MoveNode(-1, -1, -1)


function CastlingNode (isKingSide) {

    this.isKingSide = isKingSide

    this.departure = null
    this.arrival = null
    this.departant = null
    this.promotion = null
    this.capture = null
    this.recolorings = {w:[], b:[], n:[]}
    this.rebirths = []
    this.antirebirths = []
    this.promotions = []  // when promoted is some other piece, not the one that arrives, eg in KobulKings
    this.imitators = []
    this.removals = []

    this.annotation = ''
    this.checksign = ''

    this.makeBasicMovement = function(b) {
        var shift = b.btm? 0: 56

        if(this.isKingSide) {
            b.move(parseSquare('e8') + shift, parseSquare('g8') + shift)
            b.move(parseSquare('h8') + shift, parseSquare('f8') + shift)
        } else {
            b.move(parseSquare('e8') + shift, parseSquare('c8') + shift)
            b.move(parseSquare('a8') + shift, parseSquare('d8') + shift)
        }
    }

    this.assertSemantics = function() {}

    this.asText = function() {
        var retval = this.isKingSide? '0-0': '0-0-0'
        
        retval += this.imitatorsAsText() + this.recoloringsAsText() + this.antirebirthsAsText()
            + this.rebirthsAsText() + this.promotionsAsText() + this.removalsAsText()

        if(this.checksign != '')
            retval += this.checksign

        if(this.annotation != '')
            retval += this.annotation

        return this.prefix + retval
    }

}
CastlingNode.prototype = __moveNode

/**********************
Chess UI (mix of yacpdb and olive/tch code)
**********************/
function Board() {

    this.add = function(piece, at) {
        if( (at > 63) || (at < 0) ) {
            return;
        }
        this.board[at] = piece
    }

    this.drop = function(at) {
        this.add(null, at)
    }

    this.clear = function() {
        this.board = new Array(64);
        this.imitators = []

        for(i = 0; i < 64; i++) {
            this.drop(i);
        }
    }

    this.move = function(from, to) {
        this.add(this.board[from], to)
        this.drop(from)
    }

    this.transform = function(method) {
        var tmp = new Board()
        for(var i = 0; i < 64; i++) {
            if(this.board[i] != null) {
                p = to_xy(i)
                tmp.add(this.board[i], method(p.x, p.y))
            }
        }
        this.board = tmp.board
    }

    // :)
    this.rotate = function(angle) {
        switch(angle) {
            case 270:
                this.rotate(90)
            case 180:
                this.rotate(90)
            case 90:
                this.transform( function(x, y) { return from_xy(y, 7 - x) } )
        }
    }

    this.shift = function(a, b) {
        pa = to_xy(a)
        pb = to_xy(b)
        this.transform( function(x, y) { return from_xy(x + pb.x - pa.x, y + pb.y - pa.y) })
    }

    this.mirror = function(a, b) {
        if(a == 56) { // a1 <--
            if(b == 63) // --> h1
                this.transform( function(x, y) { return from_xy(7 - x, y) })
            else if (b == 7) // --> h8
                this.transform( function(x, y) { return from_xy(y, x) })
            else if (b == 0) // --> a8
                this.transform( function(x, y) { return from_xy(x, 7 - y) })
        } else if ( (a == 63) && (b == 0)) { // h1 <--> a8
            this.transform( function(x, y) { return from_xy(7 - y, 7 - x) })
        }
    }

    this.polishTwin = function(method) {
        for(var i = 0; i < 64; i++) {
            if(this.board[i] != null) {
                this.board[i].inverseColor()
            }
        }
    }

    this.toFen = function() {
        var fen = ''; var blanks = 0;
        for(var i = 0; i < 64; i++) {
            if( (i > 0) && (i % 8 == 0) ) {
                if(blanks > 0) 
                    fen += blanks;
                fen += '/';
                blanks = 0;
            }

            var f = '';
            if(this.board[i] != null) f = this.board[i].xfen();
            if(this.imitators.indexOf(i) != -1) f = '(!o)';

            if(f != '') {
                if(blanks > 0) 
                    fen += blanks;
                fen += f;
                blanks = 0;
            } else {
                blanks++;
            }
        }
        if(blanks > 0) 
            fen += blanks;
        return fen;
    }

    this.fromFen = function(fen) {
        this.clear()
        var i = 0;
        var j = 0;
        while((j < 64) && (i < fen.length)) {
            if("12345678".indexOf(fen.charAt(i)) != -1) {
                j = j + parseInt(fen.charAt(i))
                i = i + 1
            } else if('(' == fen.charAt(i)) {
                idx = fen.indexOf(')', i);
                if(idx != -1) {
                    this.add(ParsePiece(fen.substring(i+1, idx)), j)         
                    j = j + 1
                    i = idx + 1
                } else {
                    i = i + 1
                }
            } else if('/' == fen.charAt(i)) {
                i = i + 1
            } else {
                this.add(ParsePiece(fen.charAt(i)), j)           
                j = j + 1;
                i = i + 1;
            }
        }
    }
    
    this.toAlgebraic = function() {
        var retval = {white: [], black: [], neutral: []}
        var cs = {w:"white", b:"black", n:"neutral"}
        for(var i = 0; i < 64; i++) {
            if(this.board[i] != null) {
                retval[cs[this.board[i].color]].push(this.board[i].name + algebraic(i))
            }
        }
        return retval
    }

    this.fromPiecesClause = function(p) {
        this.clear()
        var lines = p.trim().toLowerCase().split("\n")
        for(var i = 0; i < lines.length; i++) {
            var words = lines[i].trim().split(/\s+/)
            if (['white', 'black', 'neutral'].indexOf(words[0]) == -1) {
                continue
            }
            var color = words[0][0]
            var specs = ''
            var j = 1
            while((j < words.length) && (__fairyHelper.pprops.indexOf(words[j]) != -1)) {
                specs += words[j][0]
                j = j + 1
            }

            var matches
            while((j < words.length) && (matches = words[j].match(/([0-9a-z][0-9a-z]?)([a-h][1-8])+/))) {
                name = matches[1].toUpperCase()
                for(var k = 0; k < (words[j].length - name.length)/2; k++) {
                    var square = parseSquare(words[j].substr(name.length + k*2, 2))
                    if('i' == name.toLowerCase()) {
                        this.imitators.push(square)
                    } else {
                        this.add(new Piece(name, color, specs), square)
                    }
                }
                j = j + 1
            }
        }
    }
    
    this.fromAlgebraic = function(algebraic) {
        for(color in algebraic) {
            if (['white', 'black', 'neutral'].indexOf(color) == -1) {
                continue;
            }
            for(var i = 0; i < algebraic[color].length; i++) {
                var words = algebraic[color][i].split(/\s+/);
                var specs = '';
                for(var j = 0; j < words.length - 2; j++) {
                    if(__fairyHelper.pprops.indexOf(words[j]) != -1) {
                        specs += words[j][0];
                    }
                }
                if(matches = words[words.length - 1].toLowerCase().match(/([a-z][0-9a-z]?)([a-h][1-8])+/)) {
                    var name = matches[1].toUpperCase();
                    var square = parseSquare(matches[2]);
                    this.add(new Piece(name, color[0], specs), square)
                }
            
            }        
        }
    }
    
    this.toPiecesClause = function(algebraic) {
        var retval = "";
        for(color in algebraic) {
            for(var i = 0; i < algebraic[color].length; i++) {
                retval += color + " " + algebraic[color][i] + "\n";
            }
        }
        //console.log(retval);
        return retval;
    }

    this.xfen2Html = function(fen) {

        var b = new Array(64);
        for(var i = 0; i < 64; i++) {
            b[i] = '';
        }

        var i = 0;
        var j = 0;
        while((j < 64) && (i < fen.length)) {
            if("12345678".indexOf(fen.charAt(i)) != -1) {
                j = j + parseInt(fen.charAt(i))
                i = i + 1
            } else if('(' == fen.charAt(i)) {
                idx = fen.indexOf(')', i);
                if(idx != -1) {
                    b[j] = fen.substring(i+1, idx)         
                    j = j + 1
                    i = idx + 1
                } else {
                    i = i + 1
                }
            } else if('/' == fen.charAt(i)) {
                i = i + 1
            } else {
                b[j] = fen.charAt(i)          
                j = j + 1;
                i = i + 1;
            }
        }
    
        var retval = '';
        for(var i = 0; i < 8; i++) {
            for(var j = 0; j < 8; j++) {
                retval += '<a class="cp' + xfen2spritedecl(b[i*8+j], (i+j)%2) +'"></a>'
            }
        }
        return retval;


    }

    this.toHtml = function() {
        var retval = '';
        for(var i = 0; i < 8; i++) {
            for(var j = 0; j < 8; j++) {
                var xfen = this.board[i*8+j] == null? '': this.board[i*8+j].xfen()
                retval += '<a class="cp' + xfen2spritedecl(xfen, (i+j)%2) +'"></a>'
            }
        }
        return retval;
    }
    
    this.btm = true  // black to move

    this.flip = function() {
        this.btm = !this.btm
    }
    
    this.getStm = function() {
        return this.btm? 'b': 'w'
    }

    this.setStm = function(c) {
        this.btm = (c == 'b')
    }

    this.serialize = function() {
        return JSON.stringify(this)
    }

    this.unserialize = function(s) {
        o = JSON.parse(s)
        for(var i = 0; i < 64; i++) {
            if(o.board[i] != null) {
                this.board[i] = new Piece(o.board[i].name, o.board[i].color, o.board[i].specs)
            } else {
                this.board[i] = null
            }
        }
        this.btm = o.btm
        this.imitators = o.imitators
    }
    
    this.piecesCount = function() {
        var cnt = {w: 0, b: 0, n: 0};
        for(var i = 0; i < 64; i++) {
            if(this.board[i] != null) {
                cnt[this.board[i].color]++;
            }
        }                
        var pcs =  cnt.w + '+' + cnt.b
        if(cnt.n > 0) pcs = pcs + '+' + cnt.n
        return pcs
    }
    

    this.clear();
}



function xfen2spritedecl(xfen, color) {
    if('' == xfen) 
        return  ['EQ', 'FQ'][color]

    sprite = {}
    matches = xfen.match(/^\(?(B?)(!?)([kqrbsnpeaofwdx])([1-7])?\)?$/i)
    if(matches) {
        sprite = {'glyph':matches[3].toLowerCase(), 'rot':matches[4], 'border':(matches[1] != '')}

        if(matches[2] != '') sprite.color = 'neutral'
        else if(sprite.glyph == matches[3]) sprite.color = 'black'
        else sprite.color = 'white' 

        if(!sprite.rot) sprite.rot = 0;

    } else {
        sprite = {'glyph':'x', 'rot':0, 'color':'white', 'border':false}
    }
    if(sprite.glyph == 'x') sprite.color = 'white';

    rot4 = 'kqrbsnp'
    rot2 = 'e'
    rot1 = 'aofwd'

    baseGlyphs = { 
            'k':[[0,0], [0,17]],
            'q':[[0,2], [0,18]],
            'r':[[0,4], [0,19]],
            'b':[[0,6], [0,20]],
            's':[[0,8], [0,21]],
            'n':[[0,8], [0,21]],
            'p':[[0,10], [0,22]],
            'e':[[0,14], [0,16]],
            'a':[[4,15], [4,15]],
            'o':[[0,15], [6,13]],
            'f':[[0,12], [0,12]],
            'w':[[4,12], [4,12]],
            'd':[[0,13], [0,13]],
            'x':[[4,13], [4,13]] }
    s = 0

    // color modifiers
    if(sprite.color == 'neutral') {
        s = baseGlyphs[sprite.glyph][1][0] + 8*baseGlyphs[sprite.glyph][1][1]
    } else if((sprite.color == 'white')) {
        s = baseGlyphs[sprite.glyph][0][0] + 8*baseGlyphs[sprite.glyph][0][1]
    } else {
        s = baseGlyphs[sprite.glyph][0][0] + 8*baseGlyphs[sprite.glyph][0][1] + 2
    }

    // rotation modifiers
    if(sprite.rot > 3) { // 45 deg are not yet supported
        sprite.rot = sprite.rot % 4
        if(0 == sprite.rot) sprite.rot = 1
    }
    if(-1 != rot4.indexOf(sprite.glyph)) {
        if(sprite.color == 'neutral') {
            s += 2*sprite.rot
        } else {
            s += 4*sprite.rot
        }
    } else if(-1 != rot2.indexOf(sprite.glyph)) {
        if(sprite.color == 'neutral') {
            s += 2*(sprite.rot % 2)
        } else {
            s += 4*(sprite.rot % 2)
        }
    } // and rot1 cant be rotated

    // bg modifier
    s += color

    ABC = 'ABCDEFGHIJKLMNOPQRSTUVW'
    classList = ABC.charAt(s % 8) + ABC.charAt(s / 8)
    if(sprite.border) classList += ' boxed'
    return classList
}

var __rootNode = null
var __fairyHelper = new FairyHelper()
var __board = new Board()

/**********************
Other UI - no jQuery code above this line
**********************/

function navigate(anchor) {
    var fen = anchor.attr('fen')
    if(!fen) {
        return
    }

    var canvas = $('#' + anchor.parent().attr('target'))

    canvas.html('<div class="p2w-nav-fwd"></div>' + 
            '<div class="p2w-nav-bwd"></div>' + 
            __board.xfen2Html(fen))
    anchor.siblings().removeClass('active')
    anchor.addClass('active')
    
    $(".p2w-nav-fwd").bind("click", Py2Web.navigateForward)
    $(".p2w-nav-bwd").bind("click", Py2Web.navigateBackward)
}

function unescapePopeyeArrows(str) {
    str = str.replace(/&lt;--&gt;/g, "<-->")
    str = str.replace(/--&gt;/g, "-->")
    str = str.replace(/==&gt;/g, "==>")
    str = str.replace(/-&gt;/g, "->")
    return str
}

return {

    navigateForward: function(e) {
        e.preventDefault()
        navigate($('.p2w-solution[target="' + $(this).parent().attr('id') + '"]').children(".active").nextAll('a').first())
    },
    
    navigateBackward: function(e) {
        e.preventDefault()
        navigate($('.p2w-solution[target="' + $(this).parent().attr('id') + '"]').children(".active").prevAll('a').first())
    },

    init: function(selector, escapeHtml, quiet) {
        
        if(typeof(escapeHtml) === 'undefined') {
            escapeHtml = false;
        }
        if(typeof(quiet) === 'undefined') {
            quiet = false;
        }
        
        var success_count = 0;
        $(selector + " .p2w-solution").each(function() {

            var b = new Board()
            var pieces_clause = $("#" + $(this).attr("target")).text()

            var glyphs = $("#" + $(this).attr("target")).attr("glyphs")
            __fairyHelper.override = glyphs? JSON.parse(glyphs): {}

            var notation = $(this).attr("notation");
            __fairyHelper.notation = notation? JSON.parse(notation): {};

            var captureGlyph = $(this).attr("capture-glyph");
            if(captureGlyph) {
                __fairyHelper.captureGlyph = captureGlyph;
            }

            var fen = $('#' + $(this).attr('target')).attr("fen");
            if(fen) {
                b.fromFen(fen.replace(/n/g, "s").replace(/N/g, "S"));
            } else {
                b.fromPiecesClause(pieces_clause);
            }

            b.setStm($(this).attr("full-move") == 'wb'? 'w': 'b')
            
            $('#' + $(this).attr('target')).html(b.toHtml())

            // parsing 
            var error_offsets = new Array()
            var error_lookaheads = new Array()
            var error_count = 0
            var str = $('<textarea />').html($(this).html()).text()    
            if(escapeHtml) {
                str = unescapePopeyeArrows($(this).html());
            }

    
            if((error_count = __##PREFIX##parse(str, error_offsets, error_lookaheads)) > 0) {
                for( i = 0; i < error_count; i++ ) {
                    if(!quiet) {
                        console.log("Parse error near \"" + str.substr(error_offsets[i]) + "\", expecting \"" + error_lookaheads[i].join() + "\"");
                    }
                }
                return
            }

            // creating solution
            try {
                var sb = new SolutionBuilder()
                var html = sb.build(__rootNode, b)
                $(this).html(html)
            } catch(e) {
                if(!quiet) {
                    console.log(e);
                }
                return
            }

            success_count++;
            // drawing board
            navigate($(this).attr("start-node") == "last"?
                $(this).children("a").last():
                $(this).children("a").first()
            )

            // initializing click handlers
            $(this).children("a").click(function(e) {
                e.preventDefault()
                navigate($(this))
            })

        })
        
        return success_count
    },
    
    Board: Board
}


*]
