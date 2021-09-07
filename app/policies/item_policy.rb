class ItemPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    record.user == user
  end

  def update?
    true
  end

  def destroy?
    record.user == user
  end
end
