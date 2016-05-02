import ply.lex as lex

import sys, os

oliveDir = "/home/dima/git/olive/"
currentDir = os.getcwd()

if not ()oliveDir + "../") in sys.path:
    sys.path.append(oliveDir + "../")
os.chdir(oliveDir)
import olive.model
os.chdir(currentDir)

# A string containing ignored characters 
t_ignore  = ' \t\r\n'

# List of token names. 
tokens = (
   'INT',
   'LEFT_SQUARE_BRACKET ',
   'RIGHT_SQUARE_BRACKET',
   'COMMENT',
   'DASH',
   'ASTERISK',
   'PLUS',    
   'EQUALS',    
   'OTHER_CHECK_SIGN',    
   'ANNOTATION',    
   'FAIRY_PROPERTIES',    
   'PIECE_NAME',    
   'MOVE_NUMBER',    
   'SQUARE',    
   'COLOR_NEUTRAL',    
   'COLOR_WHITE',    
   'COLOR_BLACK',    
   'HALF_ELLIPSIS',    
   'ELLIPSIS',    
   'KINGSIDE_CASTLING',    
   'QUEENSIDE_CASTLING',    
   'EN_PASSANT',    
   'BUT',
   'ZUGZWANG',
   'TWIN_ID',
   'ARROW',
   'LONG_ARROW',
   'LONG_DOUBLE_ARROW',
   'DOUBLE_POINTED_ARROW',
   'ROTATE',
   'MIRROR',
   'SHIFT',
   'POLISH_TYPE',
   'IMITATOR',
   'IMITATOR_MOVEMENT_OPENING_BRACKET',
   'COMMA',
)

# tokens

def t_INT(t):
    r'[0-9]+'
    t.value = int(t.value)    
    return t
    
t_LEFT_SQUARE_BRACKET        = r'\['
t_RIGHT_SQUARE_BRACKET       = r'\]'

def t_COMMENT(t):
    r'\{[^\{]*\}'
    t.value = t.value[1:-1]
    return t

t_DASH                       = r'\-'
t_ASTERISK                   = r'\*'
t_PLUS                       = r'\+'    
t_EQUALS                     = r'='    
t_OTHER_CHECK_SIGN           = r'[#=]'    
t_ANNOTATION                 = r'[!\?][!\?]?'    
t_FAIRY_PROPERTIES           = r'[cjkprvfhmu]+'    
t_PIECE_NAME                 = r'[A-Z]|([0-9A-Z][0-9A-Z])'    

def t_MOVE_NUMBER(t):
    r'[0-9]+\.'
    t.value = 2*int(t.value[:-1])
    return t

def t_SQUARE(t):
    r'[a-h][1-8]'
    t.value = olive.model.algebraicToIdx(t.value)
    return t
    
t_COLOR_NEUTRAL             = r'n'    
t_COLOR_WHITE               = r'w'    
t_COLOR_BLACK               = r'b'    
t_HALF_ELLIPSIS             = r'\.\.'    
t_ELLIPSIS                  = r'\.\.\.'    
t_KINGSIDE_CASTLING         = r'0\-0'    
t_QUEENSIDE_CASTLING        = r'0\-0\-0'    
t_EN_PASSANT                = r'ep\.'    
t_THREAT                    = r'threat:'
t_BUT                       = r'but'
t_ZUGZWANG                  = r'zugzwang\.'

def t_TWIN_ID(t):
    r'[a-z]\)'
    t.value = str(t.value[0])
    return t

t_ARROW                     = r'\->'
t_LONG_ARROW                = r'\-\->'
t_LONG_DOUBLE_ARROW         = r'==>'
t_DOUBLE_POINTED_ARROW      = r'<\-\->'
t_ROTATE                    = r'rotate'
t_MIRROR                    = r'mirror'
t_SHIFT                     = r'shift'
t_POLISH_TYPE               = r'PolishType'
t_IMITATOR                  = r'Imitator'
t_IMITATOR_MOVEMENT_OPENING_BRACKET = r'\[I'
t_COMMA                     = r','

