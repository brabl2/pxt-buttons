#include "pxt.h"

using namespace pxt;

//% color=#D400D4 weight=110 icon="\uf192" block="Buttons Disable"
namespace buttons {

/**
* Enable the micro:bit buttons A+B (P5 and P11 can be used as GPIOs).
*/
//% blockId=buttons_ena_AB
//% block="Enable buttons A+B"
//% weight=20
void enable() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonA.enable();
    uBit.buttonB.enable();
#endif
}

/**
* Disable the micro:bit buttons A+B (P5 and P11 can be used as GPIOs).
*/
//% blockId=buttons_dis_AB
//% block="Disable buttons A+B"
//% weight=20
void disable() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonA.disable();
    uBit.buttonB.disable();
#endif
}

void enableA() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonA.enable();
#endif
}
void disableA() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonA.disable();
#endif
}

void enableB() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonB.enable();
#endif
}
void disableB() {
#if MICROBIT_CODAL
    // V2 only
    uBit.buttonB.disable();
#endif
}

} // namespace buttons