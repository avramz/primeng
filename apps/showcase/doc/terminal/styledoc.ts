import { Component } from '@angular/core';

@Component({
    selector: 'terminal-style-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-terminal</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-terminal-content</td>
                        <td>Content of terminal.</td>
                    </tr>
                    <tr>
                        <td>p-terminal-prompt</td>
                        <td>Prompt text.</td>
                    </tr>
                    <tr>
                        <td>p-terminal-response</td>
                        <td>Command response.</td>
                    </tr>
                    <tr>
                        <td>p-terminal-input</td>
                        <td>Input element to enter commands.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class StyleDoc {}
