<template>
  <header class="bg-white py-6 px-8 text-gray-600">
    <div class="flex items-center justify-end">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/portfolio" class="nav-link">Portfolio</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" class="nav-link">Blog</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="nav-button">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
