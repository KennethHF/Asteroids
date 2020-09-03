//***********************************************
//DO NOT CHANGE ANYTHING IN THIS SECTION ********
//***********************************************

const W_KEY = 87;
const A_KEY = 65;
const S_KEY = 83;
const D_KEY = 68;
const SPACE_BAR = 32;

const SINGLE_GUN = 0;
const DOUBLE_GUN = 1;
const TRIPLE_GUN = 2;

//***********************************************
//CONFIGURE BELOW AS DESIRED ********************
//***********************************************

const ASTEROID_COUNT = 100;
const ASTEROID_MIN_SPEED = 1;
const ASTEROID_MAX_SPEED = 6;
const ASTEROID_MIN_RADIUS = 5;
const ASTEROID_MAX_RADIUS = 12;

const BULLET_SPEED = 8;
const BULLET_MAX_FUEL = 85;
const BULLET_COLOR_RED = 28;
const BULLET_COLOR_GREEN = 198;
const BULLET_COLOR_BLUE = 227;

const SHIP_INITIAL_DIRECTION = 270; //Directions are degrees (0 - 360)
const SHIP_INITIAL_SPEED = 0;
const SHIP_DRAG_SPEED = 0.02;
const SHIP_MAX_SPEED = 5;
const SHIP_ACCELERATION = 0.1;
const SHIP_TURN_RATE = 2.5; //increments in degrees

const MOVE_FORWARD_KEY = W_KEY;
const MOVE_BACKWARDS_KEY = S_KEY;
const TURN_LEFT_KEY = A_KEY;
const TURN_RIGHT_KEY = D_KEY;
const FIRE_WEAPON_KEY = SPACE_BAR;
