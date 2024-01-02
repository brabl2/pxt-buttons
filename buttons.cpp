#include "pxt.h"

using namespace pxt;

//% color=#D400D4 weight=111 icon="\uf192" block="Buttons Ena/Dis"
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

} // namespace buttons