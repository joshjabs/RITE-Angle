<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GameHistory extends Model
{
  public $fillable = [
      'name', 'score'
  ];
}
