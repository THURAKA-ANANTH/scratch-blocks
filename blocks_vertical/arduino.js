Blockly.Blocks['setup_loop_structure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup")
        .appendField(new Blockly.FieldTextInput("put your setup code here, to run once:"), "SETUP_CODE")
        .appendField("Loop")
        .appendField(new Blockly.FieldTextInput("put your main code here, to run repeatedly:"), "LOOP_CODE");
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(Blockly.Colours.Arduino.primary);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_digital_pin'] = {
  init: function() {
    var pinOptions = [];
    // Add numeric pin numbers from 1 to 13
    for (var i = 1; i <= 13; i++) {
      pinOptions.push([String(i), String(i)]);
    }
    // Add analog pin labels A0 to A5
    for (var j = 0; j <= 6; j++) {
      pinOptions.push(["A" + j, "A" + j]);
    }
    this.appendDummyInput()
        .appendField("Set digital")
        .appendField(new Blockly.FieldDropdown(pinOptions), "PIN_NUM")
        .appendField("output as")
        .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "PIN_STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Colours.Arduino.primary); // Set the color to the Arduino primary color
    this.setTooltip("Sets a digital/analog pin as an output and sets it to HIGH or LOW");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_pwm_pin'] = {
  init: function() {
    var pinOptions = [
      ["3", "3"],
      ["5", "5"],
      ["6", "6"],
      ["9", "9"],
      ["10", "10"],
      ["11", "11"]
    ];

    this.appendDummyInput()
        .appendField("Set PWM pin")
        .appendField(new Blockly.FieldDropdown(pinOptions), "PIN_NUM")
        .appendField("output as")
        .appendField(new Blockly.FieldNumber(255, 0, 255), "PIN_STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Colours.Arduino.primary); // Set the color to the Arduino primary color
    this.setTooltip("Sets a digital pin as an output with a value (0-255)");
    this.setHelpUrl("");
  }
};
