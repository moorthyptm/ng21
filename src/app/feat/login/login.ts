import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',

  imports: [Field, JsonPipe],
  template: `
    <div class="flex items-center justify-center min-h-screen">
      <!-- Multiple forms -->

      <!-- Login 1 -->
      <fieldset class="border p-4 rounded shadow-lg max-w-md">
        <form (submit)="submit($event)" class="space-y-4 flex flex-col">
          <div>
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              autocomplete="off"
              [field]="loginForm.username"
              class="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label for="password">Password:</label>
            <input
              type="password"
              autocomplete="off"
              id="password"
              [field]="loginForm.password"
              class="border rounded px-2 py-1 w-full"
            />
          </div>
          <button type="submit" class="bg-blue-100 px-4 py-2 rounded self-end">Login</button>
        </form>
      </fieldset>
      <fieldset class="border p-4 rounded shadow-lg max-w-md">
        <pre>
        {{ loginForm().value() | json }}
        </pre
        >
      </fieldset>

      <!-- Login 2 -->
      <!-- name="username"
         [field]="loginForm1.username"    
      
      -->

      <fieldset class="border p-4 rounded shadow-lg max-w-md">
        <form (submit)="submit1($event)" class="space-y-4 flex flex-col">
          <div>
            <label for="username1">Username:</label>
            <input
              type="text"
              id="username1"
              autocomplete="off"
              [field]="loginForm.username"
              class="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label for="password1">Password:</label>
            <input
              type="password"
              autocomplete="off"
              id="password1"
              [field]="loginForm1.password"
              class="border rounded px-2 py-1 w-full"
            />
          </div>
          <button type="submit" class="bg-blue-100 px-4 py-2 rounded self-end">Login</button>
        </form>
      </fieldset>
      <fieldset class="border p-4 rounded shadow-lg max-w-md">
        <pre>
        {{ loginForm1().value() | json }}
        </pre
        >
      </fieldset>
    </div>
  `,
})
export class LoginComponent {
  // write signal for login form
  loginSignal = signal<LoginForm>({ username: '', password: '' });

  // returns fieldTree for login form
  loginForm = form(this.loginSignal);

  // write signal for login form
  loginSignal1 = signal<LoginForm>({ username: '', password: '' });

  // returns fieldTree for login form
  loginForm1 = form(this.loginSignal1);

  submit($event: SubmitEvent) {
    $event?.preventDefault();
    console.log(this.loginForm().value());
  }

  submit1($event: SubmitEvent) {
    $event?.preventDefault();
    console.log(this.loginForm1().value());
  }
}
