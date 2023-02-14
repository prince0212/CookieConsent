<?php 

declare(strict_types=1);

namespace Deloitte\CookieConsent\Model\ResourceModel\CookieGroup;

use Deloitte\CookieConsent\Model\CookieGroup as CookieGroupModel;
use Deloitte\CookieConsent\Model\ResourceModel\AbstractCollection;
use Deloitte\CookieConsent\Model\ResourceModel\CookieGroup as CookieGroupResourceModel;

class Collection extends AbstractCollection
{
    public function _construct()
    {
        $this->_init(
            CookieGroupModel::class,
            CookieGroupResourceModel::class
        );
    }
}
