import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-terminal',
  template: `
    <div class="traffic-lights">
      <div class="traffic-light"></div>
      <div class="traffic-light"></div>
      <div class="traffic-light"></div>
    </div>

    <div class="terminal-title">Terminal</div>

    <div class="terminal-content">
      <p class="terminal-comment">
        # Using NPM to install &commat;nxgs packages
      </p>
      <div class="terminal-line">
        npm install -D &commat;nxgs/devkit &commat;nxgs/design ...
      </div>
      <br />
      <p class="terminal-comment">
        &nbsp;# You can use a simple and short command
      </p>
      <div class="terminal-line">
        npm i -D &commat;nxgs/&lbrace;devkit,design,angular,nest&rbrace;
      </div>
      <br />
      <p class="terminal-comment">
        &nbsp;# Alternatively, you can use Yarn too
      </p>
      <div class="terminal-line">
        yarn add --dev &commat;nxgs/devkit &commat;nxgs/design ...
      </div>
    </div>
  `,
  styleUrl: './terminal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalComponent {}
