// Инициализация Blockly с обычным toolbox
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true,
    trashcan: true,
    sounds: false,
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
    }
});

// Регистрация блоков
Blockly.Blocks['arduino_digital_write'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('digitalWrite')
            .appendField(new Blockly.FieldDropdown([
                ['13', '13'], ['12', '12'], ['11', '11'], ['10', '10']
            ]), 'PIN');
        this.appendValueInput('STATE')
            .setCheck('Boolean')
            .appendField('state');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#7ED320');
        this.setTooltip('Write digital value to pin');
    }
};

Blockly.Blocks['arduino_digital_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('digitalRead')
            .appendField(new Blockly.FieldDropdown([
                ['13', '13'], ['12', '12'], ['11', '11'], ['10', '10']
            ]), 'PIN');
        this.setOutput(true, 'Boolean');
        this.setColour('#7ED320');
        this.setTooltip('Read digital value from pin');
    }
};

Blockly.Blocks['arduino_pin_mode'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('pinMode')
            .appendField(new Blockly.FieldDropdown([
                ['13', '13'], ['12', '12'], ['11', '11'], ['10', '10']
            ]), 'PIN')
            .appendField(new Blockly.FieldDropdown([
                ['OUTPUT', 'OUTPUT'], ['INPUT', 'INPUT'], ['INPUT_PULLUP', 'INPUT_PULLUP']
            ]), 'MODE');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#7ED320');
        this.setTooltip('Set pin mode');
    }
};

Blockly.Blocks['arduino_analog_write'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('analogWrite')
            .appendField(new Blockly.FieldDropdown([
                ['A0', 'A0'], ['A1', 'A1'], ['A2', 'A2'], ['A3', 'A3']
            ]), 'PIN');
        this.appendValueInput('VALUE')
            .setCheck('Number')
            .appendField('value');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#4990E2');
        this.setTooltip('Write analog value to pin');
    }
};

Blockly.Blocks['arduino_analog_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('analogRead')
            .appendField(new Blockly.FieldDropdown([
                ['A0', 'A0'], ['A1', 'A1'], ['A2', 'A2'], ['A3', 'A3']
            ]), 'PIN');
        this.setOutput(true, 'Number');
        this.setColour('#4990E2');
        this.setTooltip('Read analog value from pin');
    }
};

Blockly.Blocks['arduino_servo_write'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('servoWrite')
            .appendField(new Blockly.FieldDropdown([
                ['9', '9'], ['10', '10']
            ]), 'PIN')
            .appendField(new Blockly.FieldNumber(90, 0, 180), 'ANGLE');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FFBE00');
        this.setTooltip('Write angle to servo');
    }
};

Blockly.Blocks['arduino_servo_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('servoRead')
            .appendField(new Blockly.FieldDropdown([
                ['9', '9'], ['10', '10']
            ]), 'PIN');
        this.setOutput(true, 'Number');
        this.setColour('#FFBE00');
        this.setTooltip('Read angle from servo');
    }
};

Blockly.Blocks['arduino_delay'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('delay')
            .appendField(new Blockly.FieldNumber(1000, 0), 'DELAY')
            .appendField('ms');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FF8B1A');
        this.setTooltip('Delay in milliseconds');
    }
};

Blockly.Blocks['arduino_delay_microseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('delayMicroseconds')
            .appendField(new Blockly.FieldNumber(1000, 0), 'DELAY')
            .appendField('μs');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FF8B1A');
        this.setTooltip('Delay in microseconds');
    }
};

Blockly.Blocks['arduino_millis'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('millis()');
        this.setOutput(true, 'Number');
        this.setColour('#FF8B1A');
        this.setTooltip('Current time in milliseconds');
    }
};

Blockly.Blocks['arduino_serial_begin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Serial.begin')
            .appendField(new Blockly.FieldNumber(9600, 0), 'BAUD');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FEAA16');
        this.setTooltip('Initialize serial communication');
    }
};

Blockly.Blocks['arduino_serial_print'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Serial.print')
            .appendField(new Blockly.FieldTextInput('text'), 'TEXT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FEAA16');
        this.setTooltip('Print text to serial');
    }
};

Blockly.Blocks['arduino_serial_println'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Serial.println')
            .appendField(new Blockly.FieldTextInput('text'), 'TEXT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FEAA16');
        this.setTooltip('Print text to serial with newline');
    }
};

// Генераторы кода (современный синтаксис)
Blockly.JavaScript.forBlock = Blockly.JavaScript.forBlock || {};
Blockly.JavaScript.forBlock['arduino_digital_write'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const state = Blockly.JavaScript.valueToCode(block, 'STATE', Blockly.JavaScript.ORDER_NONE) || 'LOW';
    return `digitalWrite(${pin}, ${state});\n`;
};
Blockly.JavaScript.forBlock['arduino_digital_read'] = function(block) {
    const pin = block.getFieldValue('PIN');
    return [`digitalRead(${pin})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript.forBlock['arduino_pin_mode'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const mode = block.getFieldValue('MODE');
    return `pinMode(${pin}, ${mode});\n`;
};
Blockly.JavaScript.forBlock['arduino_analog_write'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '0';
    return `analogWrite(${pin}, ${value});\n`;
};
Blockly.JavaScript.forBlock['arduino_analog_read'] = function(block) {
    const pin = block.getFieldValue('PIN');
    return [`analogRead(${pin})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript.forBlock['arduino_servo_write'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const angle = block.getFieldValue('ANGLE');
    return `servo.write(${angle}); // pin ${pin}\n`;
};
Blockly.JavaScript.forBlock['arduino_servo_read'] = function(block) {
    const pin = block.getFieldValue('PIN');
    return [`servo.read()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript.forBlock['arduino_delay'] = function(block) {
    const delay = block.getFieldValue('DELAY');
    return `delay(${delay});\n`;
};
Blockly.JavaScript.forBlock['arduino_delay_microseconds'] = function(block) {
    const delay = block.getFieldValue('DELAY');
    return `delayMicroseconds(${delay});\n`;
};
Blockly.JavaScript.forBlock['arduino_millis'] = function(block) {
    return [`millis()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript.forBlock['arduino_serial_begin'] = function(block) {
    const baud = block.getFieldValue('BAUD');
    return `Serial.begin(${baud});\n`;
};
Blockly.JavaScript.forBlock['arduino_serial_print'] = function(block) {
    const text = block.getFieldValue('TEXT');
    return `Serial.print(${JSON.stringify(text)});\n`;
};
Blockly.JavaScript.forBlock['arduino_serial_println'] = function(block) {
    const text = block.getFieldValue('TEXT');
    return `Serial.println(${JSON.stringify(text)});\n`;
};

// Генерация кода
function generateArduinoCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('generatedCode').textContent = code;
}

// Обработчики событий
document.getElementById('generateCode').addEventListener('click', generateArduinoCode);

document.getElementById('downloadCode').addEventListener('click', function() {
    const code = document.getElementById('generatedCode').textContent;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'arduino_sketch.ino';
    a.click();
    window.URL.revokeObjectURL(url);
});

// Автоматическая генерация кода при изменении
workspace.addChangeListener(generateArduinoCode);

// Обновление обводки блоков
function updateBlockStrokes() {
    const blockStrokes = {
        '#4990E2': '#2d5c8a',
        '#BD0FE0': '#7a0a96',
        '#FFBE00': '#b38a00',
        '#FEAA16': '#b3750f',
        '#7ED320': '#4e8013',
        '#FF8B1A': '#b25e12',
        '#Ff6780': '#b23a4b'
    };
    workspace.getAllBlocks().forEach(block => {
        const fill = block.getColour();
        const stroke = blockStrokes[fill] || '#222';
        const path = block.svgPath_;
        if (path) {
            path.setAttribute('stroke', stroke);
            path.setAttribute('stroke-width', 2);
        }
    });
}

// Обновлять обводку при любом изменении
workspace.addChangeListener(() => setTimeout(updateBlockStrokes, 0));
setTimeout(updateBlockStrokes, 0);

function colorToolboxText() {
    const colorMap = {
        'Digital': '#7ED320',
        'Analog': '#4990E2',
        'Servo': '#FFBE00',
        'Time': '#FF8B1A',
        'Serial': '#FEAA16',
        'Control': '#FEAA16',
        'Math': '#BD0FE0',
        'Variables': '#Ff6780'
    };
    
    document.querySelectorAll('.blocklyTreeRow').forEach(row => {
        const label = row.querySelector('.blocklyTreeLabel');
        if (label) {
            const text = label.textContent.trim();
            if (colorMap[text]) {
                // Принудительно устанавливаем цвет для всех элементов
                label.setAttribute('style', `color: ${colorMap[text]} !important; fill: ${colorMap[text]} !important;`);
                row.setAttribute('style', `color: ${colorMap[text]} !important;`);
                
                // Дополнительно устанавливаем цвет через style
                label.style.setProperty('color', colorMap[text], 'important');
                label.style.setProperty('fill', colorMap[text], 'important');
                row.style.setProperty('color', colorMap[text], 'important');

                // Добавляем обработчик клика для подсветки
                row.addEventListener('click', function() {
                    // Убираем подсветку у всех элементов
                    document.querySelectorAll('.blocklyTreeRow').forEach(r => {
                        r.style.setProperty('background', 'transparent', 'important');
                    });
                    // Подсвечиваем выбранный элемент
                    this.style.setProperty('background', '#e3f2fd', 'important');
                });
            }
        }
    });
}

// Вызываем функцию сразу и при любых изменениях
colorToolboxText();
const toolboxObserver = new MutationObserver(() => {
    setTimeout(colorToolboxText, 0);
});
toolboxObserver.observe(document.body, { subtree: true, childList: true, attributes: true }); 